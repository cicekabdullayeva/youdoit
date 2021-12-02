import {
  Col,
  Button,
  FormGroup,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Person from "../Person";
let userData;
let fullnameArr = [];
const SearchSidebar = ({ setSearchSidebar = () => {}, socket = () => {} }) => {
  const [searchPeople, setSearchPeople] = useState("");

  useEffect(() => {
    socket.emit("search", searchPeople);
    socket.on("search", (search) => {
      userData = search;
      userData.forEach((person) => {
        fullnameArr.push(person.fullname);
      });
    });
  }, [socket, searchPeople]);
  return (
    <>
      <Col className="chat-message" xs={3}>
        <div className="d-flex w-100 align-items-center">
          <Button
            variant="light"
            onClick={() => {
              setSearchSidebar(false);
            }}
          >
            <svg
              width="13"
              height="20"
              viewBox="0 0 13 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3994 2.7325L5.14775 10L12.3994 17.2675L10.1669 19.5L0.666912 10L10.1669 0.5L12.3994 2.7325Z"
                fill="#193651"
              />
            </svg>
          </Button>
          <h2 className="mb-0">Şəxslər</h2>
        </div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Şəxslərdə axtar..."
            onChange={(event) => {
              setSearchPeople(event.target.value);
            }}
          />
          <InputGroup.Text id="name">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.4316 11.9218C9.46375 11.9218 11.9218 9.46375 11.9218 6.4316C11.9218 3.39945 9.46375 0.941406 6.4316 0.941406C3.39945 0.941406 0.941406 3.39945 0.941406 6.4316C0.941406 9.46375 3.39945 11.9218 6.4316 11.9218Z"
                stroke="#0F2351"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0589 15.0584L10.353 10.3525"
                stroke="#0F2351"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </InputGroup.Text>
        </InputGroup>
        {/* <div className="messages-container"> */}
        {fullnameArr.length > 0
          ? fullnameArr.map((name, index) => (
              <div className="message" key={index}>
                <Image src="https://picsum.photos/200/300" roundedCircle />
                <div className="right-side">
                  <h3 className="from-who">{name}</h3>
                  {/* <p className="message-content">Bu gün işəgələcəksən?</p> */}
                  {/* <span className="time">5d</span> */}
                </div>
              </div>
            ))
          : null}
        {/* <Person names={fullnameArr} /> */}
        {/* <Person /> */}
      </Col>
    </>
  );
};
export default SearchSidebar;
