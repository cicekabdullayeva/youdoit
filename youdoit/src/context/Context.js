import React, { createContext, useState, useRef, useEffect } from 'react';
import Peer from 'simple-peer';

const SocketContext = createContext();

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [askCall, setAskCall] = useState(false)
  const [callerSignal, setCallerSignal] = useState();
  let myName=localStorage.getItem("username");
  const myVideo = useRef(null);
  const userVideo = useRef(null);
  const connectionRef = useRef();
  var candidate = RTCIceCandidate.candidate;
// let socket;
useEffect(() => {
  setTimeout(() => {
        window.socket.on("videoCall",(data)=>{
            // console.log(data,"Data");
            setCall({ isReceivingCall: true, name:data.name,id:data.room_id })
            console.log(call,"call");
            setCallerSignal(data.description);
        });
        window.socket.on("joinToVideo",(data)=>{ 
          console.log("join listen")        
        });
        window.socket.on("declineVideo",(data)=>{ 
          setCallEnded(true);
          window.location.reload();       
        });


    }, 2000);
  
} )

  useEffect(() => {
    if(askCall){
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
      setStream(currentStream);
      // console.log("currentStreem");
          myVideo.current.srcObject = currentStream;
          if(userVideo.current){
            userVideo.current.srcObject=currentStream;
          }
      });
      
    }
      // console.log(stream);
      console.log(userVideo,"userVideo");
      console.log(myVideo,"myVideo")

  }, [askCall]);

  const answerCall = () => {
    setCallAccepted(true);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current){
        userVideo.current.srcObject = stream;
        console.log("user")
      }
      setCallAccepted(true);
      const peer = new Peer({
        initiator: false,
        trickle: false,
        stream: stream,
      });
      peer.on('signal', (data) => {
        window.socket.emit('answerVideo', { description: data, room_id:call.id });
        setAskCall(true);
        console.log("answer");
      console.log(callerSignal,"callersignal")

      });

      peer.on('stream', (currentStream) => {
        if(userVideo.current){
          userVideo.current.srcObject = currentStream;
        }
      });

      peer.signal(callerSignal);

      connectionRef.current = peer;
      console.log(connectionRef);
  })
  }

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, config: {
    
            iceServers: [
                {url:'stun:stun01.sipphone.com'},
                {url:'stun:stun.ekiga.net'},
                {url:'stun:stun.fwdnet.net'},
                {url:'stun:stun.ideasip.com'},
                {url:'stun:stun.iptel.org'},
                {url:'stun:stun.rixtelecom.se'},
                {url:'stun:stun.schlund.de'},
                {url:'stun:stun.l.google.com:19302'},
                {url:'stun:stun1.l.google.com:19302'},
                {url:'stun:stun2.l.google.com:19302'},
                {url:'stun:stun3.l.google.com:19302'},
                {url:'stun:stun4.l.google.com:19302'},
                {url:'stun:stunserver.org'},
                {url:'stun:stun.softjoys.com'},
                {url:'stun:stun.voiparound.com'},
                {url:'stun:stun.voipbuster.com'},
                {url:'stun:stun.voipstunt.com'},
                {url:'stun:stun.voxgratia.org'},
                {url:'stun:stun.xten.com'},
                {
                url: 'turn:numb.viagenie.ca',
                credential: 'muazkh',
                username: 'webrtc@live.com'
                },
                {
                url: 'turn:192.158.29.39:3478?transport=udp',
                credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
                username: '28224511:1379330808'
                },
                {
                url: 'turn:192.158.29.39:3478?transport=tcp',
                credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
                username: '28224511:1379330808'
                }
            ]
        }, stream });
    peer.on('signal', (data) => {
      window.socket.emit('videoCall', { room_id: id, description: data ,name: myName });
      console.log("video");
      setAskCall(true)
    });

    peer.on('stream', (currentStream) => {
      if(userVideo.current){
        console.log("uservideo var")
        userVideo.current.srcObject = currentStream;
      }
    });
     window.socket.on('answerVideo', (data) => {
          setCallAccepted(true);
          console.log(data.description,"answer");
          window.socket.emit("joinToVideo",{room_id:call.id, candidate:candidate})
         peer.signal(data.description);

    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    // connectionRef.current.destroy();
    window.socket.emit("declineVideo",{room_id:call.id})
    window.location.reload();
  };

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      callUser,
      leaveCall,
      answerCall,
      askCall
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
