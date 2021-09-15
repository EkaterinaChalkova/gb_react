import { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { getDog } from "./actions";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "30%",
    height: "10%",
  },

  imageWrapper: {
    minWidth: "250px",
    minHeight: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  DogImg: {
    width: "100%",
    height: "100%",
  },
}));

const Dog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { message, loading, error } = useSelector((state) => state.dog);

  console.log(message, loading, error);

  const getThunkDog = useCallback(() => dispatch(getDog()), [dispatch]);

  useEffect(() => {
    getThunkDog();
  }, [getThunkDog]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        {loading && <CircularProgress />}
        {error && <div>Возникла ошибка</div>}

        {!loading && !error && message && (
          <img className={classes.DogImg} src={message.message} alt="Dog" />
        )}
      </div>

      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={() => getThunkDog()}
      >
        Посмотреть картинку
      </Button>
    </div>
  );
};
export default Dog;
