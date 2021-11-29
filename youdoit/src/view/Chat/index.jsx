import { Container,Row,Col,Button } from 'react-bootstrap';
import Header from "./header.jsx";
import { Link } from 'react-router-dom';
import { chatMenu  } from '../../menu/chatMenu.js';
const Chat=()=>{
    return(
        <>
            <Header/>
            <section className="chat">
                <Container fluid>
                        <Row>
                            <Col className="chat-side-menu" xs={2}>
                                {chatMenu.map(menu=>{
                                            return(
                                            <Link href="#" className={menu.active}>
                                                {menu.icon}
                                            </Link>
                                            )
                                        })  
                                }
                            </Col>
                            <Col className="chat-message" xs={3}>
                                <div className="d-flex w-100">
                                    <h2>Söhbətlər</h2>
                                    <Button variant="light" className="ms-auto">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="4" fill="#2ED06A" fill-opacity="0.6"/>
                                        <path d="M14.6668 10.6663H10.6668V14.6663H9.3335V10.6663H5.3335V9.33301H9.3335V5.33301H10.6668V9.33301H14.6668V10.6663Z" fill="white"/>
                                        </svg>
                                    </Button>
                                    <Button variant="light">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_831_429)">
                                        <path d="M15.4142 9.41421C16.1953 8.63317 16.1953 7.36683 15.4142 6.58578C14.6332 5.80473 13.3668 5.80473 12.5858 6.58578C11.8047 7.36683 11.8047 8.63317 12.5858 9.41421C13.3668 10.1953 14.6332 10.1953 15.4142 9.41421Z" fill="#181818" fill-opacity="0.7"/>
                                        <path d="M9.41419 9.41421C10.1952 8.63317 10.1952 7.36683 9.41419 6.58578C8.63315 5.80473 7.36682 5.80473 6.58578 6.58578C5.80474 7.36683 5.80474 8.63317 6.58578 9.41421C7.36682 10.1953 8.63315 10.1953 9.41419 9.41421Z" fill="#181818" fill-opacity="0.7"/>
                                        <path d="M3.41421 9.41421C4.19525 8.63317 4.19525 7.36683 3.41421 6.58578C2.63316 5.80473 1.36683 5.80473 0.585784 6.58578C-0.195261 7.36683 -0.195261 8.63317 0.585784 9.41421C1.36683 10.1953 2.63316 10.1953 3.41421 9.41421Z" fill="#181818" fill-opacity="0.7"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_831_429">
                                        <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </Button>
                                </div>
                                
                            </Col>
                            <Col>
                            </Col>
                        </Row>

                </Container>

            </section>
        </>
    )
}
export default Chat;