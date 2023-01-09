import { all } from "redux-saga/effects";
import { login, register } from "./sagas/Authentication";
import {
  createBoard,
  deleteBoard,
  editBoard,
  getBoards,
  getBoardsProfile,
  updateBoard
} from "./sagas/Board";
import { deletePin, getBoardsHasPin, getPin, getPins } from "./sagas/Pin";
import { getProfile, updateProfile } from "./sagas/Profile";
import { getAllPins, getTags, searchByTag } from "./sagas/Tag";

export default function* rootSaga() {
  yield all([
    login(),
    register(),
    createBoard(),
    editBoard(),
    deleteBoard(),
    getBoards(),
    getBoardsProfile(),
    getPins(),
    getAllPins(),
    getPin(),
    getBoardsHasPin(),
    deletePin(),
    updateBoard(),
    getProfile(),
    updateProfile(),
    getTags(),
    searchByTag()
  ]);
}
