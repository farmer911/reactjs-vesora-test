import { createAsyncReducer } from '../../utils/Redux';
import { getProfileAction } from "../actions";

export default createAsyncReducer(getProfileAction);