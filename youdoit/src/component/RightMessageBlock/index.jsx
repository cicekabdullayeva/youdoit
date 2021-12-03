import { Image } from "react-bootstrap";
const RightMessage = (name, id) => {
  return (
    <div className="message" key="id">
      <Image src="https://picsum.photos/200/300" roundedCircle />
      <div className="right-side">
        <h3 className="from-who">{name}</h3>
        <p className="message-content">Bu gün işəgələcəksən?</p>
        <span className="time">5d</span>
      </div>
    </div>
  );
};
export default RightMessage;
