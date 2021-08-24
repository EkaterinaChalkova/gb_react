import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  chatButton: {
    width: "145px",

    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
    "&:active": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
  },
  chatLink: {
    textDecoration: "none",
  },
}));

const ChatListComponent = (props) => {
  const classes = useStyles();
  const [chatArray, setChatArray] = useState([
    { name: "first", id: "1" },
    { name: "second", id: "2" },
    { name: "third", id: "3" },
  ]);

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        {chatArray.map((e) => (
          <ListItem key={e.id}>
            {" "}
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                if (e.id == e.id) {
                  alert("Join to " + e.id + "?");
                }
              }}
              className={classes.chatButton}
            >
              <Link className={classes.chatLink} to={"/chat/" + e.id}>
                CHAT {e.id}
              </Link>
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChatListComponent;
