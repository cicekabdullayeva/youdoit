import { Image } from "react-bootstrap";
const Message=()=>{
    return(
        <div className='message'>
            <Image src="https://picsum.photos/200/300" roundedCircle />
            <div className="right-side">
                <h3 className="from-who">Nazrin Miriyeva</h3>
                <p className="message-content">Bu gün işəgələcəksən?</p>
                <span className="time">5d</span>
            </div>
        </div>
    )
};
export default Message;