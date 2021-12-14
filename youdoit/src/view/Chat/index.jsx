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
import React from "react";
import add from "../../Icons/plus.svg";
import settings from "../../Icons/settings.svg";
import search from "../../Icons/search.svg";
import phone from "../../Icons/phone.svg";
import videoCamera from "../../Icons/video.svg";
import info from "../../Icons/info.svg";
import { useState, useEffect, useContext, useRef } from "react";
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
  const messagesEndRef = useRef(null);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [connect, setConnect] = useState(false);
  const [searchSidebar, setSearchSidebar] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [room, setRoom] = useState(null);
  const [roomId, setRoomId] = useState("");
  const [messages, setMessages] = useState([]);
  const [oldMessage, setOldMessage] = useState([]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
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
      scrollToBottom();
      window.socket.on("message", (mess) => {
        console.log(mess, "mess");
        setMessages((old) => {
          let allMessages = [...old];
          allMessages.push(mess);
          return allMessages;
        });
      });
      window.socket.on("getMessages", (oldMessages) => {
        setOldMessage(oldMessages.rows.reverse());
      });
      window.socket.on("declineVideo", () => {
        console.log("decline");
        window.location.reload();
      });
    }
  }, [connect]);

  // ADD VIDEO
  const {
    callUser,
    answerCall,
    call,
    callAccepted,
    // name,
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
                      <img src={add} alt="" />
                    </Button>
                    <Button variant="light">
                      <img src={settings} alt="" />
                    </Button>
                  </div>
                  <InputGroup className="mb-3">
                    <FormControl placeholder="Çatda axtar..." />
                    <InputGroup.Text id="basic-addon2">
                      <img src={search} alt="" />
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
                              setMessages([]);
                              window.socket.emit("getMessages", {
                                room_id: contact.id,
                                page: 1,
                              });
                              console.log(contact.id);
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
                        <img src={phone} alt="" />
                      </Link>
                      <Button
                        className="btn-light"
                        onClick={() => {
                          callUser(roomId);
                        }}
                      >
                        <img src={videoCamera} alt="" />
                      </Button>
                      <Button
                        className="btn-light"
                        onClick={() => {
                          visibleSidebar
                            ? setVisibleSidebar(false)
                            : setVisibleSidebar(true);
                        }}
                      >
                        <img src={info} alt="" />
                      </Button>
                    </div>
                  </div>
                  {connect ? (
                    <div className="messages-box position-relative">
                      <div className="messages-inside">
                        {/* {JSON.stringify(oldMessage)} */}
                        {oldMessage.length > 0
                          ? oldMessage.map((item, index) =>
                              Number(myId) !== item.user_id ? (
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
                        {messages.length > 0
                          ? messages.map((item, index) =>
                              Number(myId) !== item.user_id ? (
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
                        <div ref={messagesEndRef} />
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
            <Button
              variant="secondary"
              onClick={() => {
                leaveCall();
              }}
            >
              Close
            </Button>
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
