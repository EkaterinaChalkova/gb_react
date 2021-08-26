import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  profileStyle: {
    backgroundColor: "#0ABAB5",
    maxWidth: "1140px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    fontSize: "45px",
    color: "white",
  },
}));

const Profile = (props) => {
  const classes = useStyles();
  return <div className={classes.profileStyle}>Profile</div>;
};

export default Profile;
