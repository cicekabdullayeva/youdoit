import { Image } from "react-bootstrap";
const TheirMessages = ({ item, key }) => {
  //   if (true) {
  //     return (
  //       <div className="other-side">
  //         <div className="d-flex align-items-end">
  //           <Image src="https://picsum.photos/200/300" roundedCircle />
  //           <div className="sender-message img-sender-message">
  //             <Image src="https://picsum.photos/200/300"></Image>
  //           </div>
  //         </div>
  //         <div className="send-time">Today at 1:32pm</div>
  //       </div>
  //     );
  //   }
  return (
    <div className="other-side" key={key}>
      <div className="d-flex align-items-end">
        <Image src="https://picsum.photos/200/300" roundedCircle />
        <div className="sender-message">
          <p>{item.message}</p>
        </div>
      </div>
      <div className="send-time">Today at 1:32pm</div>
    </div>
  );
};
export default TheirMessages;
