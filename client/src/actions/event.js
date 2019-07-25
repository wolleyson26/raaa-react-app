import axios from "axios";
import { setAlert } from "./alert";
import {
  ADD_EVENT,
  GET_EVENTS,
  GET_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  EVENT_ERROR
} from "./types";

// Get events
export const getEvents = () => async dispatch => {
  try {
    const res = await axios.get("/api/events");

    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get event by ID
export const getEventById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/events/${id}`);

    dispatch({
      type: GET_EVENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add an event
export const addEvent = (formData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/events", formData);

    dispatch(setAlert("Event Created", "success"));

    history.push("/calendar");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
