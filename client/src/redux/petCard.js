import * as ActionTypes from "./ActionTypes";
const initialState = {
  petcard: [] 

};
export const Petcard = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PETCARD:
      return { ...state, petcard:state.petcard.concat(action.payload)};
      case ActionTypes.RESET_STATE:
              return initialState
    default:
      return state;
  }
};
