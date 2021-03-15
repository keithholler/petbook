import * as ActionTypes from "./ActionTypes";

export const UniqueIds = (state = { uniqueId: "I am default" }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_UNIQUEID:
      return { ...state, uniqueId: action.payload };
    default:
      return state;
  }
};
