import { FEED } from "../shared/feedObjects";
import * as ActionTypes from "./ActionTypes";

export const Feed = (state = { feed: []}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEED:
      
      return { ...state, feed:action.payload};
    default:
      return state;
  }
};
