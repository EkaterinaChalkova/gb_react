import React, { useState, useEffect } from "react";
import ChatListComponent from "./ChatListComponent";
import InputWrapperComponent from "./InputWrapperComponent";
import MessageListComponent from "./MessageListComponent";

import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { createTheme } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  Container: {
    maxWidth: "1140px",
    margin: "0 auto",
  },
  hidden: {
    display: "none",
  },

  chatsStyle: {
    backgroundColor: "#0ABAB5",
    display: "flex",
    justifyContent: "center",
    fontSize: "45px",
    color: "white",
  },
  appWrapper: {
    maxWidth: "1140px",
    margin: "0 auto",
    display: "flex",
  },

  ChatListComponent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  componentWrapper: {
    width: "400px",
    height: "480px",
    border: "15px solid #809dff",
    display: "flex",
    flexDirection: "column",
    fontSize: "25px",
    color: "#black",
  },
  UserName: {
    color: "blue",
  },
  UserSurname: {
    color: "blue",
  },
  chChat: {
    paddingTop: "55px",
    color: "red",
  },
}));

function Chat() {
  const [inputMessage, setInputMessage] = useState({
    time: "",
    msg: "",
    user: "",
    chatId: "",
  });
  const [messagesArray, setMessagesArray] = useState([]);

  // useEffect(() => {
  //   document.getElementsByClassName("messageList")[0].scrollTop = 9999;
  // });

  useEffect(() => {
    if (messagesArray.length > 0) {
      if (messagesArray.slice(-1)[0].user !== "Robot") {
        setTimeout(
          () =>
            setMessagesArray((prev) => [
              ...prev,
              {
                time: getTime(),
                msg: "Сообщение отправлено",
                user: "Robot",
                chatId: params.chatId,
              },
            ]),
          1500
        );
      }
    }
  }, [messagesArray]);

  const getTime = () => {
    var today = new Date();
    var set_time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return set_time;
  };
  const params = useParams();
  const classes = useStyles();
  const onSendMessage = () => {
    setMessagesArray((prev) => [
      ...prev,
      {
        time: getTime(),
        msg: inputMessage.msg,
        user: "Kate",
        chatId: params.chatId,
      },
    ]);
    setInputMessage({ time: "", msg: "", chatId: "" });
  };
  const storeName = useSelector((state) => state.profile.inputName);
  const storeSureName = useSelector((state) => state.profile.inputSurname);

  // для скролла чата

  // overflow-y: auto;
  // scroll-behavior: smooth;

  // useEffect(() => {
  //   document.getElementsByClassName("messageList")[0].scrollTop = 9999;
  //   // console.log("feff");
  // }, [messagesArray]);

  // console.log(params.chatId == "choosechat");

  return (
    <div className={classes.Container}>
      <div>
        <h3 className={classes.UserName}> Your name: {storeName}</h3>
        <h3 className={classes.UserSurname}>Your surname: {storeSureName}</h3>
      </div>
      <span className={classes.ChatListComponent}>
        {" "}
        <div className={params.chatId === "choosechat" ? "" : classes.hidden}>
          <h3 className={classes.chChat}> Select chat</h3>
        </div>
        <ChatListComponent />
      </span>

      <div className={params.chatId === "choosechat" ? classes.hidden : ""}>
        {/* <div>{params.chatId}</div> */}

        <div className={classes.appWrapper}>
          <div className={classes.componentWrapper}>
            <MessageListComponent
              messagesArray={messagesArray}
              propChatId={params.chatId}
            />
            <InputWrapperComponent
              onClick={onSendMessage}
              value={inputMessage}
              onChange={(e) =>
                setInputMessage((prev) => ({
                  ...prev,
                  msg: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
