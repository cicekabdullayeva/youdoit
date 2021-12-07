import React, { createContext, useState, useRef, useEffect } from 'react';
import Peer from 'simple-peer';

const SocketContext = createContext();

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const [askCall, setAskCall] = useState(false)

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
//   let socket;
useEffect(() => {
  setTimeout(() => {
        // console.log('vvf', window.socket)
        window.socket.on("videoCall",(data)=>{
            console.log(data,"Data");
            setCall({ isReceivingCall: true, name:data.name, signal:data.description,id:data.room_id })
            console.log(call,"call");
        });
        console.log(call.signal,"signal")
       
      window.socket.on("joinToVideo",(data)=>{console.log(data,'JOIN')})

    }, 2000);
}, )

  useEffect(() => {
    if(askCall){
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
      setStream(currentStream);
      // console.log("currentStreem");
          myVideo.current.srcObject = currentStream;
          // userVideo.current.srcObject=currentStream;
      });
    }
      console.log(stream);
      console.log(userVideo,"userVideo");
      console.log(myVideo,"myVideo")

  }, [askCall,call]);

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      window.socket.emit('answerVideo', { description: data, room_id:call.id });
      setAskCall(true);
      console.log("answer");
      window.socket.emit("joinToVideo",{room_id:call.id, candidate:data})
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
      console.log(userVideo)
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
    console.log(connectionRef);
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on('signal', (data) => {
      window.socket.emit('videoCall', { room_id: id, description: data ,name:"cicek" });
      console.log("video")
      setAskCall(true)
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
     window.socket.on('answerVideo', ({description,room_id}) => {
          console.log("accepted");
          setCallAccepted(true);
          console.log(description,"answer");
          peer.signal(description);
    });

    connectionRef.current = peer;
  };

  const leaveCall = (id) => {
    setCallEnded(true);
    connectionRef.current.destroy();

    window.socket.emit("declineCall",{room_id:call.id})
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
      me,
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
