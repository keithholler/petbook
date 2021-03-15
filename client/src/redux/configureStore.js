import { createStore, combineReducers,applyMiddleware,compose  } from "redux";
import thunk from 'redux-thunk';
import {createForms} from 'react-redux-form';
import { UniqueIds } from "./uniqueId";
import { Post } from "./post";
import { UserInfo } from "./userInfo";
import { Petcard } from "./petCard";
import {InitialFeedback} from './profileForm';
import {InitialFeedback2} from './lostPetForm';
import {InitialFeedback3} from './petForm';
import {authReducer} from "./authReducer";
import {errorReducer} from "./errorReducer";
const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const ConfigureStore = () => {
const store = createStore(
    combineReducers({
      uniqueId: UniqueIds,
      post: Post, 
      userInfo:UserInfo,
      petcard:Petcard,
      auth: authReducer,
  errors: errorReducer,
      ...createForms({
        profileForm: InitialFeedback,
        lostPetForm: InitialFeedback2,
        petForm: InitialFeedback3
      })
    }),
    composeEnhancers(applyMiddleware(thunk))

  );
  return store; 
 
};
// export const store = createStore(
//   combineReducers({
//     uniqueId: UniqueIds,
//     post: Post, 
//     userInfo:UserInfo,
//     petcard:Petcard,
//     auth: authReducer,
// errors: errorReducer,
//     ...createForms({
//       profileForm: InitialFeedback,
//       lostPetForm: InitialFeedback2,
//       petForm: InitialFeedback3
//     })
//   }),
//   composeEnhancers(applyMiddleware(thunk))

// );