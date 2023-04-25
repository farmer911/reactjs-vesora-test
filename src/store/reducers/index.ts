import { combineReducers } from "redux";

import orderStore from "./order.reducer";
import profileStore from './profile.reducer'

const rootReducer = combineReducers({
  order: orderStore,
  profile: profileStore
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;