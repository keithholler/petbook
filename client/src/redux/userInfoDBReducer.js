import {
    ADD_USER_INFODB,
    UPDATE_USER_INFODB,
    GET_USER_INFODB
  } from "./ActionTypes";
  const isEmpty = require("is-empty");

  export const userInfoDBReducer = (state = { userInfodb: [] }, action)=> {
    switch (action.type) {
        case ADD_USER_INFODB:
            return {
              ...state,
              userInfodb:action.payload.data

            };
            case UPDATE_USER_INFODB:
              return {
                ...state,
                userInfodb:action.payload.data

              };
              case GET_USER_INFODB:
              return {
                ...state,
                userInfodb:action.payload.data

              };
          default:
            return state;      
    }
  }