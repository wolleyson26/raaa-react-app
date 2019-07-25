import {
  ADD_EVENT,
  GET_EVENTS,
  GET_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  EVENT_ERROR
} from "../actions/types";

const initialState = {
  events: [],
  event: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS:
      return {
        ...state,
        events: payload,
        loading: false
      };
    case GET_EVENT:
      return {
        ...state,
        event: payload,
        loading: false
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
        loading: false
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(post => post.id != payload),
        loading: false
      };
    case EVENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
