import { compose } from "redux";
import * as ActionTypes from "./ActionTypes";
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
//import thunk from 'redux-thunk';
import { createForms } from "react-redux-form";
import { Post } from "./post";

import { InitialFeedback } from "./profileForm";
import { InitialFeedback2 } from "./lostPetForm";
import { InitialFeedback3 } from "./petForm";
import { authReducer } from "./authReducer";
import { postReducer } from "./postReducer";
import { petReducer } from "./petReducer";
import { userInfoDBReducer } from "./userInfoDBReducer";
import { errorReducer } from "./errorReducer";

import { AllPostsdb } from "./allPosts";
import { AllUsersdb } from "./allUsers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const combinedReducer = combineReducers({

//   post: Post,
//   userInfo:UserInfo,
//   petcard:Petcard,
//   auth: authReducer,
//   postreducer:postReducer,
//   userinfodb:userInfoDBReducer,
//   pet:petReducer,
// errors: errorReducer,
//   ...createForms({
//     profileForm: InitialFeedback,
//     lostPetForm: InitialFeedback2,
//     petForm: InitialFeedback3
//   }),
// composeEnhancers
// });

//  const rootReducer = (state, action) => {
//   if (ActionTypes.RESET_STORE) {
//     state = undefined;
//   }
//   return combinedReducer(state, action);
// };

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: [...getDefaultMiddleware()]
// });

export const store = configureStore({
  reducer: {

    post: Post,
    allPostsdb: AllPostsdb,
    allUsersdb: AllUsersdb,
    auth: authReducer,
    postreducer: postReducer,
    userinfodb: userInfoDBReducer,
    pet: petReducer,
    errors: errorReducer,
    ...createForms({
      profileForm: InitialFeedback,
      lostPetForm: InitialFeedback2,
      petForm: InitialFeedback3,
    }),
  },
  composeEnhancers,
});
