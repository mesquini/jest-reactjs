import { call, put } from "redux-saga/effects";
import api from "~/services/api";
import { getTechsSuccess, getTechsFailure } from "./action";

export function* getTechs() {
  try {
    const resp = yield call(api.get, "techs");

    yield put(getTechsSuccess(resp.data));
  } catch (err) {
    yield put(getTechsFailure());
  }
}
