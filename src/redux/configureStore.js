import { createStore, combineReducers } from "redux";
import {createForms} from 'react-redux-form';
import { UniqueIds } from "./uniqueId";
import { Text } from "./post";
import { Feed } from "./feedObjects";
import { UserInfo } from "./userInfo";
import {InitialFeedback} from './profileForm';
import {InitialFeedback2} from './lostPetForm';
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      uniqueId: UniqueIds,
      text: Text,
      feed: Feed,
      unserInfo:UserInfo,
      ...createForms({
        profileForm: InitialFeedback,
        lostPetForm: InitialFeedback2
      })
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
