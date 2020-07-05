import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducers/root.reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(rootReducer, composeEnhancers());
