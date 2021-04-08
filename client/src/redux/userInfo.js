import * as ActionTypes from "./ActionTypes";

const initialState = {
  userInfo: [],
};

export const UserInfo = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USERINFO:
      return { ...state, userInfo: action.payload };
    case ActionTypes.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
