import React, { useState, useEffect } from "react";
import ChatListComponent from "./ChatListComponent";
import InputWrapperComponent from "./InputWrapperComponent";
import MessageListComponent from "./MessageListComponent";
import { AddMessage } from "./chatSlice";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
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
  const dispatch = useDispatch();
  const [inputMessage, setInputMessage] = useState({
    time: "",
    msg: "",
    user: "",
    chatId: "",
  });

  const MessagesArray = useSelector((state) => state.chat.MessagesArray);

  const getTime = () => {
    var today = new Date();
    var set_time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return set_time;
  };

  const params = useParams();
  const classes = useStyles();
  const onSendMessageThunk = () => (dispatch, getState) => {
    dispatch(
      AddMessage({
        time: getTime(),
        msg: inputMessage.msg,
        user: "Kate",
        chatId: params.chatId,
      })
    );
    setTimeout(
      () =>
        dispatch(
          AddMessage({
            time: getTime(),
            msg: "Hi, i wanna be your friend",
            user: "ROBOT",
            chatId: params.chatId,
          })
        ),
      1500
    );
    setInputMessage({ timeStamp: "", msg: "", chatId: "" });
  };

  const callThunk = () => {
    dispatch(onSendMessageThunk());
  };

  const storeName = useSelector((state) => state.profile.inputName);
  const storeSureName = useSelector((state) => state.profile.inputSurname);

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
        <div className={classes.appWrapper}>
          <div className={classes.componentWrapper}>
            <MessageListComponent
              messagesArray={MessagesArray}
              propChatId={params.chatId}
            />
            <InputWrapperComponent
              onClick={callThunk}
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
