import { createStore, combineReducers,applyMiddleware,compose  } from "redux";
import thunk from 'redux-thunk';
import {createForms} from 'react-redux-form';
import { UniqueIds } from "./uniqueId";
import { Text } from "./post";
import { Feed } from "./feedObjects";
import { UserInfo } from "./userInfo";
import {InitialFeedback} from './profileForm';
import {InitialFeedback2} from './lostPetForm';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      uniqueId: UniqueIds,
      text: Text,
      feed: Feed,
      userInfo:UserInfo,
      ...createForms({
        profileForm: InitialFeedback,
        lostPetForm: InitialFeedback2
      })
    }),
    composeEnhancers(applyMiddleware(thunk))

  );
  return store;
};
