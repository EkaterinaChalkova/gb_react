import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "10px 10px",
    width: "70%",
  },

  button: {
    margin: "10px 10px",
  },

  inputWrapper: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",

    justifyContent: "space-between",
  },
}));

const InputWrapperComponent = (props) => {
  const classes = useStyles();

  function internalClick() {
    props.onClick();
    document.getElementById("outlined-basic").focus();
  }

  return (
    <div className={classes.inputWrapper}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <TextField
        id="outlined-basic"
        label="Enter your message"
        multiline
        maxRows={2}
        variant="outlined"
        autoFocus
        value={props.value.msg}
        onChange={props.onChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            console.log("Enter");

            props.onClick();
          }
        }}
        className={classes.input}
      />

      {/* <button >Отправить</button> */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        onClick={internalClick}
      >
        Send
      </Button>
    </div>
  );
};

export default InputWrapperComponent;
