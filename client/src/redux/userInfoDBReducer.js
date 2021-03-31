import {
    ADD_USER_INFODB,
    UPDATE_USER_INFODB,
    GET_USER_INFODB
  } from "./ActionTypes";


  export const userInfoDBReducer = (state = {    loading: false, userInfodb: [] }, action)=> {
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