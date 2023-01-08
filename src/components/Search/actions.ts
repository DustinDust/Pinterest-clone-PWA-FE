import { SEARCH_BY_TAG_FAILED, SEARCH_BY_TAG_SUCCESS } from './reducers';
import { SEARCH_BY_TAG } from './../../redux-saga/actions';

export const searchByTag = (payload: any, componentId?: string) => ({
    type: SEARCH_BY_TAG,
    response: {
      success: {
        type: SEARCH_BY_TAG_SUCCESS,
      },
      failure: {
        type: SEARCH_BY_TAG_FAILED,
      },
    },
    payload,
    componentId,
    loading: true,
  });