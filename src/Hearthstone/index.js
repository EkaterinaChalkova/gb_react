import { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { getHearthstone } from "./actions";

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

  HearthstoneImg: {
    width: "100%",
    height: "100%",
  },
}));

const Hearthstone = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.hearthstone);

  // console.log(data, loading, error);

  const getThunkHearthstone = useCallback(
    () => dispatch(getHearthstone()),
    [dispatch]
  );

  useEffect(() => {
    getThunkHearthstone();
  }, [getThunkHearthstone]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        {loading && <CircularProgress />}
        {error && <div>Возникла ошибка!!!</div>}

        {!loading && !error && data && (
          <img
            className={classes.HearthstoneImg}
            src={data.data}
            alt="Hearthstone"
          />
        )}
      </div>

      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={() => getThunkHearthstone()}
      >
        Посмотреть картинку
      </Button>
    </div>
  );
};
export default Hearthstone;
