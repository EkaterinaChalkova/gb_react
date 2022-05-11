import {
  setData,
  setError,
  setLoading,
  Hearthstone_API_URL,
} from "./hearthstoneSlice";

export const getHearthstone = () => async (dispatch, getState) => {
  const {
    hearthstone: { data, loading, error },
  } = getState();

  if (!loading) {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));
      const responce = await fetch(Hearthstone_API_URL, {
        method: "GET",
        mode: "no-cors",
      });

      console.log(responce);
      if (!responce.ok) {
        throw new Error("Something went wrong");
      }
      const result = await responce.json();

      dispatch(setData(result));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }
};
