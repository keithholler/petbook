import * as ActionTypes from "./ActionTypes";

export const Petcard = (state = { petcard: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PETCARD:
      return { ...state, petcard:state.petcard.concat(action.payload)};
    default:
      return state;
  }
};
