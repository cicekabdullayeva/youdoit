import React, { createContext, useState, useRef, useEffect } from "react";
// import { io } from 'socket.io-client';
import Peer from "simple-peer";

const SocketContext = createContext();

// const socket = io('http://localhost:5000');
// const socket = io('https://warm-wildwood-81069.herokuapp.com');

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [me, setMe] = useState("");

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  //   let socket;

  useEffect(() => {
    //   let data = localStorage.getItem("token");
    // socket = io(`https://chat.youdoit.app`, {
    //   extraHeaders: {
    //     authorization: `Bearer ${data}`,
    //   },
    //   transports: ["polling"],
    //   credentials: true,
    //   forceNew: true,
    // });
    let isMounted = true;
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        //    if (isMounted)  setStream(currentStream);
        // myVideo.current.srcObject = currentStream;
      });

    // socket.on('me', (id) => setMe(id));

    // socket.on('videoCall', ({ from, name: callerName, signal }) => {
    //   setCall({ isReceivingCall: true, from, name: callerName, signal });
    // });
    setTimeout(() => {
      console.log("vvf", window.socket);
      window.socket.on("videoCall", ({ name, description }) => {
        console.log("video zeng");
        setCall({ isReceivingCall: true, name, description });
        console.log(call);
      });
    }, 5000);

    // console.log(connectionRef);
    // console.log(window.socket,"socket")
    return () => {
      isMounted = false;
    };
  }, []);

  const answerCall = (id) => {
    setCallAccepted(true);
    const peer = new Peer({ initiator: false, trickle: false, stream });
    peer.on("signal", (data) => {
      window.socket.emit("answerVideo", { description: data, room_id: id });
    });
    // peer.on('stream', (currentStream) => {
    //   userVideo.current.srcObject = currentStream;
    // });
    // peer.signal(call.signal);

    connectionRef.current = peer;
    console.log(connectionRef);
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on("signal", (data) => {
      console.log(window.socket);
      window.socket.emit("videoCall", {
        room_id: id,
        description: data,
        name: "cicek",
      });
      console.log("video is good");
    });

    // peer.on('stream', (currentStream) => {
    //   userVideo.current.srcObject = currentStream;
    // });

    window.socket.on("answerVideo", (signal) => {
      setCallAccepted(true);
      console.log(signal);
      peer.signal(signal);
      console.log("accepted");
    });

    connectionRef.current = peer;
  };

  //   const leaveCall = () => {
  //     setCallEnded(true);

  // //     connectionRef.current.destroy();

  // //     window.location.reload();
  //   };

  return (
    <SocketContext.Provider
      value={{
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
        //   leaveCall,
        answerCall,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
