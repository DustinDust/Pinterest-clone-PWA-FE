import { combineReducers } from "@reduxjs/toolkit";
import { LoginResult } from "screens/Login/reducers";
import { registerResult } from "screens/Register/reducers";

const rootReducer = combineReducers({
    loginResult: LoginResult,
    registerResult: registerResult
})

export default rootReducer;
