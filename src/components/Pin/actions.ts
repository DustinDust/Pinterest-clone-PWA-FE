import { GET_PIN_FAILED, GET_PIN_SUCCESS } from './reducers';
import { GET_PIN } from './../../redux-saga/actions';

export const getPin = (payload: any, componentId?: string) => ({
  type: GET_PIN,
  response: {
    success: {
      type: GET_PIN_SUCCESS,
    },
    failure: {
      type: GET_PIN_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});