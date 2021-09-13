import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  homeStyle: {
    backgroundColor: "#0ABAB5",
    maxWidth: "1140px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    fontSize: "45px",
    color: "white",
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeStyle} position="static">
      Home
    </div>
  );
};

export default Home;
