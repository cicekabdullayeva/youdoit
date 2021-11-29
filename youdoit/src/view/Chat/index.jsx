import { Container,Row,Col,Dropdown } from 'react-bootstrap';
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
                            <Col className="chat-side-menu">
                                {chatMenu.map(menu=>{
                                            return(
                                            <Link href="#" className={menu.active}>
                                                {menu.icon}
                                            </Link>
                                            )
                                        })  
                                }
                            </Col>
                            <Col className="chat-mesa">

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