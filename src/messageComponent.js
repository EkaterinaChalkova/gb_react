const MessageComponent = (props) => {
  return (
    <div className="message_style">
      {props.messageArray.map((message, i) => (
        <div key={i}>{message.author + ": " + message.text}</div>
      ))}
    </div>
  );
};

export default MessageComponent;

// {
/* <div className="messageList">
        {messageArray.map((message, i) => (<div key={i}>{message}</div>))}
      
      </div> */
// }
