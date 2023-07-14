import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
import rootSaga from "./sagas";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware)

// Mount it on the Store
const store = createStore(rootReducer, composeWithDevTools(enhancer));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;