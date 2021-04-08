import {
  ADD_USER_INFODB,
  UPDATE_USER_INFODB,
  GET_USER_INFODB,
  RESET_STATE,
} from "./ActionTypes";

const initialState = {
  loading: false,
  userInfodb: [],
};

export const userInfoDBReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_INFODB:
      return {
        ...state,
        userInfodb: action.payload.data,
      };
    case UPDATE_USER_INFODB:
      return {
        ...state,
        userInfodb: action.payload.data,
      };
    case GET_USER_INFODB:
      return {
        ...state,
        userInfodb: action.payload.data,
      };
    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};
