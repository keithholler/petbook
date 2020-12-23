import { FEED } from "../shared/feedObjects";
import * as ActionTypes from "./ActionTypes";

export const Feed = (state = { feed: FEED }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEED:
      const comment = action.payload;
      return { ...state, feed:action.payload};
    default:
      return state;
  }
};
