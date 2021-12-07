import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Image,
  Modal,
} from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import Header from "./header.jsx";
import { Link } from "react-router-dom";
import { chatMenu } from "../../menu/chatMenu.js";
import RightSidebar from "../../component/RightSidebar/index.jsx";
// import RightMessage from "../../component/RightMessageBlock/index.jsx";
import io from "socket.io-client";
// import Messages from "../../component/Messages/index.jsx";
import MessageInput from "../../component/MessageInput/index.jsx";
import SearchSidebar from "../../component/SearchSidebar/index.jsx";
// Add Video
import { SocketContext } from "../../context/Context.js";

let socket;
let myId = localStorage.getItem("id");
const Chat = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [connect, setConnect] = useState(false);
  const [searchSidebar, setSearchSidebar] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [room, setRoom] = useState(null);
  const [roomId, setRoomId] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("rendered");
    let data = localStorage.getItem("token");
    socket = io(`https://chat.youdoit.app`, {
      extraHeaders: {
        authorization: `Bearer ${data}`,
      },
      transports: ["polling"],
      credentials: true,
      forceNew: true,
    });
    socket.on("connect", () => {
      console.log("connected", socket.id);
      socket.emit("listContacts");
      socket.on("listContacts", (item) => {
        setContacts(item);
      });
      window.socket = socket;
      setConnect(true);
    });
    socket.on("disconnect", () => console.log("disconnected"));
    return () => socket.close();
  }, []);

  useEffect(() => {
    if (connect) {
      window.socket.on("message", (mess) => {
        console.log(mess, "mess");
        setMessages((old) => {
          let allMessages = [...old];
          allMessages.push(mess);
          return allMessages;
        });
      });
    }
  }, [connect]);

  // ADD VIDEO
  const {
    callUser,
    answerCall,
    call,
    callAccepted,
    name,
    myVideo,
    userVideo,
    callEnded,
    stream,
    askCall,
    leaveCall,
  } = useContext(SocketContext);

  return (
    <>
      <Header />
      <section className="chat">
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col className="chat-side-menu" xs={2}>
              {chatMenu.map((menu) => {
                return (
                  <Link to="/" className={menu.active} key={menu.key}>
                    {menu.icon}
                  </Link>
                );
              })}
            </Col>
            {!searchSidebar ? (
              <>
                <Col className="chat-message" xs={3} md={4}>
                  <div className="d-flex w-100">
                    <h2>Söhbətlər</h2>
                    <Button
                      variant="light"
                      className="ms-auto"
                      onClick={() => {
                        // setModalVisible(true);
                        setSearchSidebar(true);
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="4"
                          fill="#2ED06A"
                          fillOpacity="0.6"
                        />
                        <path
                          d="M14.6668 10.6663H10.6668V14.6663H9.3335V10.6663H5.3335V9.33301H9.3335V5.33301H10.6668V9.33301H14.6668V10.6663Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                    <Button variant="light">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_831_429)">
                          <path
                            d="M15.4142 9.41421C16.1953 8.63317 16.1953 7.36683 15.4142 6.58578C14.6332 5.80473 13.3668 5.80473 12.5858 6.58578C11.8047 7.36683 11.8047 8.63317 12.5858 9.41421C13.3668 10.1953 14.6332 10.1953 15.4142 9.41421Z"
                            fill="#181818"
                            fillOpacity="0.7"
                          />
                          <path
                            d="M9.41419 9.41421C10.1952 8.63317 10.1952 7.36683 9.41419 6.58578C8.63315 5.80473 7.36682 5.80473 6.58578 6.58578C5.80474 7.36683 5.80474 8.63317 6.58578 9.41421C7.36682 10.1953 8.63315 10.1953 9.41419 9.41421Z"
                            fill="#181818"
                            fillOpacity="0.7"
                          />
                          <path
                            d="M3.41421 9.41421C4.19525 8.63317 4.19525 7.36683 3.41421 6.58578C2.63316 5.80473 1.36683 5.80473 0.585784 6.58578C-0.195261 7.36683 -0.195261 8.63317 0.585784 9.41421C1.36683 10.1953 2.63316 10.1953 3.41421 9.41421Z"
                            fill="#181818"
                            fillOpacity="0.7"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_831_429">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="matrix(1 0 0 -1 0 16)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Button>
                  </div>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Çatda axtar..." />
                    <InputGroup.Text id="basic-addon2">
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
                  <div className="messages-container">
                    {contacts?.length > 0 &&
                      contacts.map((contact, index) => {
                        return (
                          // <RightMessage
                          //   name={contact.name}
                          //   id={contact.id}
                          //   key={contact.id}
                          // />
                          <div
                            className="message"
                            key={index}
                            onClick={() => {
                              setRoom(contact.name);
                              setRoomId(contact.id);
                              // window.socket.emit("getMessages", {
                              //   room_id: contact.id,
                              // });
                              // window.socket.on("getMessages", (messages) => {
                              //   console.log(messages, "messages");
                              // });
                              setMessages([]);
                            }}
                          >
                            <Image
                              src="https://picsum.photos/200/300"
                              roundedCircle
                            />
                            <div className="right-side">
                              <h3 className="from-who">{contact.name}</h3>
                              <p className="message-content">
                                Bu gün işəgələcəksən?
                              </p>
                              {/* <span className="time">5d</span> */}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </Col>
              </>
            ) : (
              <SearchSidebar setSearchSidebar={setSearchSidebar} />
            )}
            <Col className="p-0 h-100">
              {room !== null ? (
                <div className="message-container">
                  <div className="message-header">
                    <Image src="https://picsum.photos/200/300" roundedCircle />
                    <h3 className="from-who">{room}</h3>
                    <div className="icons ms-auto">
                      <Link to="/">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.2347 14.4405C18.8878 14.4405 17.5653 14.2298 16.312 13.8157C15.6979 13.6062 14.943 13.7984 14.5682 14.1833L12.0945 16.0507C9.22573 14.5193 7.45863 12.7528 5.94819 9.90556L7.76061 7.49633C8.23149 7.02608 8.40039 6.33915 8.19804 5.69462C7.7821 4.43478 7.57081 3.11289 7.57081 1.76539C7.57086 0.791943 6.77892 0 5.80554 0H1.76533C0.791943 0 0 0.791943 0 1.76533C0 12.9229 9.07718 22 20.2347 22C21.2081 22 22.0001 21.2081 22.0001 20.2347V16.2058C22 15.2324 21.2081 14.4405 20.2347 14.4405Z"
                            fill="#3083DC"
                          />
                        </svg>
                      </Link>
                      <Button
                        className="btn-light"
                        onClick={() => {
                          // window.socket.emit("videoCall", { room_id: roomId });
                          callUser(roomId);
                        }}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.4442 4.53711H2.407C1.08315 4.53711 0 5.62026 0 6.94411V15.0557C0 16.3796 1.08315 17.4627 2.407 17.4627H12.4442C13.7681 17.4627 14.8512 16.3796 14.8512 15.0557V6.94411C14.8512 5.59619 13.7681 4.53711 12.4442 4.53711Z"
                            fill="#3083DC"
                          />
                          <path
                            d="M20.2188 5.86104C20.0744 5.88511 19.93 5.95732 19.8096 6.02953L16.0547 8.19583V13.7801L19.8337 15.9464C20.5317 16.3556 21.3982 16.1149 21.8074 15.4168C21.9278 15.2002 22 14.9595 22 14.6947V7.2571C22 6.36651 21.1575 5.64441 20.2188 5.86104Z"
                            fill="#3083DC"
                          />
                        </svg>
                      </Button>
                      <Button
                        className="btn-light"
                        onClick={() => {
                          visibleSidebar
                            ? setVisibleSidebar(false)
                            : setVisibleSidebar(true);
                        }}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 0C4.95 0 0 4.95 0 11C0 17.05 4.95 22 11 22C17.05 22 22 17.05 22 11C22 4.95 17.05 0 11 0ZM12.1 16.5H9.9V9.9H12.1V16.5ZM12.1 7.7H9.9V5.5H12.1V7.7Z"
                            fill="#3083DC"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                  {connect ? (
                    <div className="messages-box position-relative">
                      <div className="messages-inside">
                        {messages.length > 0
                          ? messages.map((item, index) =>
                              myId != item.user_id ? (
                                <div className="other-side" key={index}>
                                  <div className="d-flex align-items-end">
                                    <Image
                                      src="https://picsum.photos/200/300"
                                      roundedCircle
                                    />
                                    <div className="sender-message">
                                      <p>{item.message}</p>
                                    </div>
                                  </div>
                                  <div className="send-time">
                                    Today at 1:32pm
                                    {call.isReceivingCall}
                                  </div>
                                </div>
                              ) : (
                                <div className="user-side" key={index}>
                                  <div className="self-message">
                                    <p>{item.message}</p>
                                  </div>
                                  <div className="send-time">
                                    Today at 1:32pm
                                  </div>
                                </div>
                              )
                            )
                          : null}
                      </div>
                      <MessageInput
                        roomId={roomId}
                        setMessages={setMessages}
                        messages={messages}
                      />
                    </div>
                  ) : (
                    <h4>Dissconnect</h4>
                  )}
                </div>
              ) : null}
            </Col>
            {visibleSidebar ? <RightSidebar /> : null}
          </Row>
        </Container>
      </section>
      {!callAccepted && (
        <Modal show={call.isReceivingCall} centered>
          <Modal.Header closeButton>
            <Modal.Title>Receiving Call</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{call.name}</h4>
            <p>Is calling you</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button
              variant="primary"
              onClick={() => {
                answerCall(roomId);
              }}
            >
              Aply
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {askCall && (
        <Modal show="true" centered>
          <Modal.Header>
            <Modal.Title>VideoCall</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!callAccepted ? <h5>Calling...</h5> : null}
            {stream && (
              <>
                <video playsInline muted ref={myVideo} autoPlay />
                <p>my Video</p>
              </>
            )}
            {callAccepted && !callEnded && (
              <video playsInline ref={userVideo} autoPlay />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                leaveCall(roomId);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
export default Chat;
