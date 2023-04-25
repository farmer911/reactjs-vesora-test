import { createAsyncAction, createUpdateAction } from "../../utils/Redux";

const ns = 'GET_ORDER_TABS';

const asyncAction = createAsyncAction(ns);
const updateAction = createUpdateAction(ns)

const getOrderAction = {
    ...asyncAction,
    ...updateAction
};

export default getOrderAction;
