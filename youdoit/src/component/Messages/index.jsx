import TheirMessage from "../../component/TheirMessage/index.jsx";
import MyMessage from "../../component/MyMessage/index.jsx";
const Messages = ({ oldMessage, messages, myId }) => {
  return (
    <div className="messages-inside">
      {oldMessage.length > 0
        ? oldMessage.map((item, index) =>
            Number(myId) !== item.user_id ? (
              <TheirMessage key={index} item={item} />
            ) : (
              <MyMessage item={item} key={index} />
            )
          )
        : null}
      {messages.length > 0
        ? messages.map((item, index) =>
            Number(myId) !== item.user_id ? (
              <TheirMessage key={index} item={item} />
            ) : (
              <MyMessage item={item} key={index} />
            )
          )
        : null}
      {/* <div ref={messagesEndRef} /> */}
    </div>
  );
};
export default Messages;
