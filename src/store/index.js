import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, composeWithDevTools());

  if (module.hot) {
    module.hot.accept("./reducers/index", () => {
      const nextRootReducer = require("./reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
