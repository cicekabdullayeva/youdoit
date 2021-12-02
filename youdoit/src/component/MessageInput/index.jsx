import { Button, InputGroup, FormControl } from "react-bootstrap";
// import TheirMessages from "../../component/TheirMessage/index.jsx";
// import MyMessages from "../../component/MyMessage/index.jsx";
const MessageInput = () => {
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
        <FormControl placeholder="Write a message" aria-describedby="message" />
        <InputGroup.Text id="message">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.67533 17.5L19.167 10L1.67533 2.5L1.66699 8.33333L14.167 10L1.66699 11.6667L1.67533 17.5Z"
              fill="#3083DC"
            />
          </svg>
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};
export default MessageInput;
