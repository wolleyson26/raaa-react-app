import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import alert from "./alert";
import profile from "./profile";
import post from "./post";
import event from "./event";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  alert,
  profile,
  post,
  event
});
