import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { SEARCH_BY_TAG } from "./../../actions";

const searchByTagUrl = `/search`;

function searchByTag(payload: Record<string, unknown>) {
  const { text, pageNum, pageSize } = payload;
  return axios.get(searchByTagUrl, {
    params: {
      pageNum: pageNum,
      pageSize: pageSize,
      name: text
    }
  });
}

function* doSearchByTag(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(searchByTag, request.payload!);
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

export default function* watchSearchByTag() {
  yield takeLatest(SEARCH_BY_TAG, doSearchByTag);
}
