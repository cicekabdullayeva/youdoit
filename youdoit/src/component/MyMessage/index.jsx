// import { Image } from "react-bootstrap";
const MyMessages = ({ item, key }) => {
  //   if (true) {
  //     return (
  //       <div className="user-side">
  //         <Image src="https://picsum.photos/200/300" ></Image>
  //         <div className="send-time">Today at 1:32pm</div>
  //       </div>
  //     );
  //   }
  return (
    <div className="user-side" key={key}>
      <div className="self-message">
        <p>{item.message}</p>
      </div>
      <div className="send-time">Today at 1:32pm</div>
    </div>
  );
};
export default MyMessages;
