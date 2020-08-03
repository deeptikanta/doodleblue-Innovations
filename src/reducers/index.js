import { combineReducers } from "redux";
import todos from "./todos";
import DashBoardReducer from '../conatiners/dashboard/dashboard.reducer';

export default combineReducers({ todos,DashBoardReducer });
