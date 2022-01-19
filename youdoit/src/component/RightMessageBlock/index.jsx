import { Image, Card, Placeholder } from "react-bootstrap";
const LeftMessage = ({ contact, id, setRoom, setRoomId, setMessages }) => {
  return (
    <div
      className="message"
      onClick={() => {
        setRoom(contact.name);
        setRoomId(contact.id);
        setMessages([]);
        window.socket.emit("getMessages", {
          room_id: contact.id,
          page: 1,
        });
      }}
    >
      <Image src="https://picsum.photos/200/300" roundedCircle />
      <div className="right-side">
        <h3 className="from-who">{contact.name}</h3>
        <p className="message-content">Bu gün işəgələcəksən?</p>
      </div>
    </div>
  );
};
export default LeftMessage;
