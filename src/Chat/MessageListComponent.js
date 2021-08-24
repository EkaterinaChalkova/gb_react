import { requirePropFactory } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { BorderBottom } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  messageList: {
    width: "100%",
    height: "90%",
    borderBottom: "5px solid #816aff",
    overflow: "auto",
    wordWrap: "break-word",
    backgroundImage: `url("https://st.depositphotos.com/1139282/3893/i/600/depositphotos_38930427-stock-photo-chat-bubble-symbol-on-grey.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    opacity: "0.7",
  },
}));

const MessageListComponent = (props) => {
  const classes = useStyles();
  console.log(props.propChatId);

  return (
    <div className={classes.messageList}>
      {props.messagesArray.map((message, i) => (
        <div key={i}>
          {/*добавить  сравнение id для вывода сообщений в определенный чат */}
          {message.time} {message.user}: {message.msg} {message.chatId}
        </div>
      ))}
    </div>
  );
};

export default MessageListComponent;
