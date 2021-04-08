import { ALL_USER_POST, RESET_STATE } from "./ActionTypes";

const initialState = {
  allPostsdb: [],
};

export const AllPostsdb = (state = initialState, action) => {
  switch (action.type) {
    case ALL_USER_POST:
      return {
        ...state,
        allPostsdb: action.payload.data,
      };
    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};
