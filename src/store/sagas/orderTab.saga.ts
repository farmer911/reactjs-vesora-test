import { call, put, takeLatest } from "redux-saga/effects";
import { AsyncAction } from "../../types/Action";
import { getOrderTabs } from "../actions";
import { orderTab } from "../services/orderTab";

function* getOrderTabRequest(
    action: AsyncAction
) {
    try {
        const { data } = yield call(orderTab);
        yield put(getOrderTabs.success(data))
    } catch (e: any) {
        yield put(getOrderTabs.failed(e.message));
    }
}

function* getOrderTabWatcher(): any {
    yield takeLatest(getOrderTabs.REQUEST, getOrderTabRequest);
}

export default getOrderTabWatcher;
