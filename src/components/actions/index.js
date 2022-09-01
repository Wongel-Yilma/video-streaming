import {
  SIGN_OUT,
  SIGN_IN,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";
import history from "../../history";
import streams from "../../apis/streams";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = streams.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  console.log(response.data);
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
  // Do some programmatic navigation
  //Get the user back to the root
};

export const fetchStream = (id) => async (dispatch) => {
  console.log(id);
  const response = await streams.get(`/streams/${id}`);
  console.log(response);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const updateRecord = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};
export const deleteStream = (id) => async (dispatch) => {
  console.log(id);
  const response = await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
