import { createAsyncAction } from "../../utils/Redux";

const ns = 'GET_PROFILE';

const asyncAction = createAsyncAction(ns);

const getProfileAction = {
    ...asyncAction,
};

export default getProfileAction;
