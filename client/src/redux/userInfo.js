import * as ActionTypes from "./ActionTypes";

export const UserInfo = (state = { userInfo: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USERINFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};