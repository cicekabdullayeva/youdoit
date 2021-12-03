import { Button, InputGroup, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";

const MessageInput = ({ roomId, messages, setMessages = () => {} }) => {
  const [myMessage, setMyMessage] = useState("");
  let allMessages = [...messages];
  useEffect(() => {
    window.socket.on("message", (mess) => {
      console.log(mess, "mess");
      allMessages.push(mess);
      setMessages(allMessages);
      console.log(allMessages);
    });
  }, []);

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
          onChange={(e) => {
            setMyMessage(e.target.value);
          }}
        />
      </InputGroup>
      <Button
        class="btn-transparent flex-center"
        onClick={() => {
          window.socket.emit("message", {
            room_id: roomId,
            message: myMessage,
          });
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
