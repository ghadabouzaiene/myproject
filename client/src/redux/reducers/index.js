import { combineReducers } from "redux";
import appStateReducer from "./appStateReducer";
import authReducer from "./authReducer";


export default combineReducers({
    auth: authReducer,
    appState: appStateReducer
})