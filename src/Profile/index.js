import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { setNameSurname } from "./profileSlice";

const useStyles = makeStyles((theme) => ({
  Container: {
    maxWidth: "1140px",
    margin: "0 auto",
  },
  profileStyle: {
    backgroundColor: "#0ABAB5",
    maxWidth: "1140px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    fontSize: "45px",
    color: "white",
  },
  InputBox: {
    width: "600px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: "150px",
    paddingTop: "50px",
  },
  InputText: {
    marginLeft: "150px",
    paddingTop: "50px",
  },
  InputButton: {
    marginLeft: "380px",
    marginTop: "50px",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");

  const addInfo = () => {
    console.log(inputName);
    console.log(inputSurname);
  };

  const params = useParams();

  const storeName = useSelector((state) => state.profile.inputName);
  const storeSureName = useSelector((state) => state.profile.inputSurname);
  const dispatch = useDispatch();

  const updeteStore = () => {
    dispatch(
      setNameSurname({ inputName: inputName, inputSurname: inputSurname })
    );
  };

  return (
    <div className={classes.Container}>
      <div className={classes.InputBox}>
        <TextField
          required
          id="standard-required"
          label="Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />

        <TextField
          required
          id="standard-required"
          label="Surname"
          value={inputSurname}
          onChange={(e) => setInputSurname(e.target.value)}
        />
      </div>

      <div>
        <Button
          className={classes.InputButton}
          variant="outlined"
          color="primary"
          onClick={updeteStore}
        >
          add info
        </Button>
      </div>

      <div className={classes.InputText}>
        <h4>Your name: {storeName} </h4> <h4>Your surname: {storeSureName}</h4>
      </div>
    </div>
  );
};

export default Profile;
