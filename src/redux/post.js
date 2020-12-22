import * as ActionTypes from "./ActionTypes";

export const Text = (state = { text: "default" }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
