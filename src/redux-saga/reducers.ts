import { combineReducers } from "@reduxjs/toolkit";
import { LoginResult } from "screens/Login/reducers";
import { registerResult } from "screens/Register/reducers";
import {
  CreateBoardResult,
  DeleteBoardResult,
  EditBoardResult
} from "components/CreateBoard/reducers";
import { GetBoardsResult, GetProfileResult } from "components/Profile/reducers";
import { GetPinsResult } from "components/Board/reducers";
import { UpdateBoardResult } from "components/UpdateBoard/reducers";
import { ToastResult } from "screens/Home/reducers";

const rootReducer = combineReducers({
  loginResult: LoginResult,
  registerResult: registerResult,
  getProfileResult: GetProfileResult,
  createBoardResult: CreateBoardResult,
  editBoardResult: EditBoardResult,
  deleteBoardResult: DeleteBoardResult,
  getBoardsResult: GetBoardsResult,
  updateBoardResult: UpdateBoardResult,
  getPinsResult: GetPinsResult,
  toastResult: ToastResult
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
