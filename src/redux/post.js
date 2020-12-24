import * as ActionTypes from "./ActionTypes";

export const Text = (state = { text: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      return { ...state, text:state.text.concat(action.payload).reverse()};
    default:
      return state;
  }
};
