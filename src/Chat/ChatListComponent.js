import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import { useParams } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Container: {
    maxWidth: "1140px",
    margin: "0 auto",
  },
  chatButton1: {
    display: "none",
  },

  chatButton: {
    width: "45px",
    marginLeft: "30px",

    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
    "&:active": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
  },
  Label: {
    fontSize: "25px",
    marginRight: "20px",
    marginLeft: "10px",
    color: "#1F75FE",
  },
  chatLink: {
    textDecoration: "none",
    color: "white",
  },
  Input: {
    border: "1px solid #cccccc", //цвет рамки
    borderRadius: "3px", //закругление углов (общее)
    background: "#ffffff !important",
    outline: "none",
    fontSize: "18px",
    height: "34px",
    width: "220px",
    color: "#0ABAB5",
    margin: "10px 10px",
    paddingLeft: "20px",
  },
  adelButton: {
    width: "650px",
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px",
  },

  chatButtons: {
    // width: "650px",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
}));

const ChatListComponent = (props) => {
  const classes = useStyles();
  const [chatsArray, setChatArray] = useState([
    { name: "first", id: "1" },
    { name: "second", id: "2" },
    { name: "third", id: "3" },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputId, setInputId] = useState("");

  const addChat = () => {
    setChatArray((prev) => [
      ...prev,
      {
        name: inputName,
        id: inputId,
      },
    ]);
    setInputName("");
    setInputId("");
  };

  const deleteChat = () => {
    setChatArray((prev) => [
      ...prev.filter((x) => x.name != inputName && x.id != inputId),
    ]);
    setInputName("");
    setInputId("");
  };
  const params = useParams();

  if (
    chatsArray.map((x) => x.id).includes(params.chatId) ||
    params.chatId == "choosechat"
  ) {
    return (
      <div className={classes.Container}>
        <div>
          <label className={classes.Label}>name chat</label>
          <input
            className={classes.Input}
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <label className={classes.Label}>id chat</label>
          <input
            className={classes.Input}
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
          {/* <div className={classes.adelButton}> */}
          <Button
            className={classes.chatButton}
            variant="outlined"
            color="primary"
            onClick={addChat}
          >
            add
          </Button>
          <Button
            className={classes.chatButton}
            variant="outlined"
            color="primary"
            onClick={deleteChat}
          >
            delete
          </Button>
          {/* </div> */}
        </div>

        <List
          className={classes.chatButtons}
          component="nav"
          aria-label="main mailbox folders"
        >
          {chatsArray.map((e) => (
            <ListItem key={e.id}>
              {" "}
              <Button variant="contained" color="primary">
                <Link className={classes.chatLink} to={"/chat/" + e.id}>
                  Chat {e.id}
                </Link>
              </Button>
            </ListItem>
          ))}
        </List>
      </div>
    );
  } else {
    return <Redirect to="/chat/choosechat" />;
  }
};

export default ChatListComponent;
