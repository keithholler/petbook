import * as ActionTypes from "./ActionTypes";
const initialState = {
  uniqueId: "I am default",
};
export const UniqueIds = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_UNIQUEID:
      return { ...state, uniqueId: action.payload };
    case ActionTypes.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
