import { SocketContext } from "../../context/Context";
const videoCall = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div>
      {stream && <video playsInline muted ref={myVideo} autoPlay />}
      {callAccepted && !callEnded && (
        <video playsInline ref={userVideo} autoPlay />
      )}
    </div>
  );
};
export default videoCall;
