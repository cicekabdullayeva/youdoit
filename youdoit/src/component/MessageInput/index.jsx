import { Button, InputGroup, FormControl } from "react-bootstrap";
import { useRef } from "react";

const MessageInput = ({ roomId }) => {
  const messageRef = useRef();
  const sendMessage = () => {
    window.socket.emit("message", {
      room_id: roomId,
      message: messageRef.current.value,
    });
    messageRef.current.value = "";
  };

  return (
    <div className="write-container">
      <Button>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="#3083DC" />
          <path
            d="M20.25 15.75H15.75V20.25H14.25V15.75H9.75V14.25H14.25V9.75H15.75V14.25H20.25V15.75Z"
            fill="white"
          />
        </svg>
      </Button>
      <InputGroup>
        <FormControl
          placeholder="Write a message"
          aria-describedby="message"
          ref={(r) => (messageRef.current = r)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
        />
      </InputGroup>
      <Button
        className="btn-transparent flex-center"
        onClick={() => {
          sendMessage();
        }}
      >
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.676302 15.5L18.168 8L0.676302 0.5L0.667969 6.33333L13.168 8L0.667969 9.66667L0.676302 15.5Z"
            fill="#3083DC"
          />
        </svg>
      </Button>
    </div>
  );
};
export default MessageInput;
