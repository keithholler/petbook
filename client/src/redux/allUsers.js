import { ALL_USER_INFODB, RESET_STATE } from "./ActionTypes";

const initialState = {
  allUsersdb: [],
};

export const AllUsersdb = (state = initialState, action) => {
  switch (action.type) {
    case ALL_USER_INFODB:
      return {
        ...state,
        allUsersdb: action.payload.data,
      };
    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};
