import { call, put, takeLatest } from "redux-saga/effects";
import { AsyncAction } from "../../types/Action";
import { profileUser } from "../services/profile";
import { getProfileAction } from "../actions";

function* getProfileRequest(
  action: AsyncAction
) {
  try {
    const { data } = yield call(profileUser);
    yield put(getProfileAction.success(data))
  } catch (e: any) {
    yield put(getProfileAction.failed(e.message));
  }
}

function* getProfileWatcher(): any {
  yield takeLatest(getProfileAction.REQUEST, getProfileRequest);
}

export default getProfileWatcher;
