import { createStore, combineReducers } from "redux";
import { UniqueIds } from "./uniqueId";
import { Text } from "./post";
import { Feed } from "./feedObjects";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      uniqueId: UniqueIds,
      text: Text,
      feed: Feed,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
