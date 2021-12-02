// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   InputGroup,
//   FormControl,
//   Image,
// } from "react-bootstrap";
import TheirMessages from "../../component/TheirMessage/index.jsx";
import MyMessages from "../../component/MyMessage/index.jsx";
const Messages = () => {
  return (
    <div className="messages-inside">
      <TheirMessages />
      <MyMessages />
    </div>
  );
};
export default Messages;
