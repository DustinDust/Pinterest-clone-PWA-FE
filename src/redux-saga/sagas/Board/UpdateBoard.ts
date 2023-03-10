import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { UPDATE_BOARD } from "../../actions";

const updateBoardUrl = (boardId: number) => `/board/${boardId}/save-pin`;

function updateBoard(payload: Record<string, unknown>) {
  const { boardId } = payload;
  const formData = new FormData();
  if (payload.pinId) {
    formData.append("id", payload.pinId as string);
  } else {
    formData.append("image", payload.image as File);
    formData.append("name", (payload.name as string) || "image");
    if (payload.tags) {
      for (let i = 0; i < (payload.tags as Array<any>).length; i++) {
        formData.append(
          `tagIds[${i}]`,
          (payload.tags as Array<any>)[i] as string
        );
      }
    }
    if (payload.newTags) {
      for (let i = 0; i < (payload.newTags as Array<any>).length; i++) {
        formData.append(
          `tagNames[${i}]`,
          (payload.newTags as Array<any>)[i] as string
        );
      }
    }
  }
  return axios.put(`${updateBoardUrl(boardId as number)}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}

function* doUpdateBoard(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(updateBoard, request.payload!);
    yield put({
      type: request.response?.success?.type,
      payload: {
        request: request.payload,
        componentId: request.componentId,
        response: response.data
      }
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: request.response?.failure?.type,
      loading: false,
      payload: {
        request: request.payload,
        componentId: request.componentId
      }
    });
  }
}

export default function* watchUpdateBoard() {
  yield takeLatest(UPDATE_BOARD, doUpdateBoard);
}
