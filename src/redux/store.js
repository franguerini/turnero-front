import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { routerReducer as router, routerMiddleware } from "react-router-redux";
import { reducer as reduxFormReducer } from "redux-form";
import createHistory from "history/createMemoryHistory";

export const history = createHistory();

const reducers = combineReducers({});

const enhancers = [];

/* ------------- Thunk Middleware ------------- */

/* ------------- Assemble Middleware ------------- */

const composeEnhancers =
  typeof document === "undefined"
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

function createInitialState(props) {
  return {
    auth: {
      currentUser: props.currentUser,
      errors: props.errors,
      referrerPath: props.referrerPath,
      resetPasswordToken: props.resetPasswordToken,
      notice: props.notice
    }
  };
}

export function createStoreInitial(props) {
  const preloadedState = createInitialState(props);
  return createStore(reducers);
}

export default createStoreInitial;
