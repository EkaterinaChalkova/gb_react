import { setMessage, setError, setLoading, Dog_API_URL } from "./dogSlice";

export const getDog = () => async (dispatch, getState) => {
  const {
    dog: { message, loading, error },
  } = getState();

  if (!loading) {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));
      const responce = await fetch(Dog_API_URL);
      if (!responce.ok) {
        throw new Error("Something went wrong");
      }
      const result = await responce.json();

      dispatch(setMessage(result));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }
};
