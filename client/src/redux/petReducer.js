import {
    ADD_PET,
    GET_PETS,
    UPDATE_PET,
    RESET_STATE
  } from "./ActionTypes";
  const isEmpty = require("is-empty");
  const initialState = {
    pets: []
  
  };
  export const petReducer = (state = initialState, action)=> {
    switch (action.type) {
        case ADD_PET:
            return {
              ...state,
             // pets:action.payload.data
              pets:state.pets
            };
            case GET_PETS:
              return {
                ...state,
                pets:action.payload.data

              };
                case UPDATE_PET:
                return {
                  ...state,
                  pets:action.payload.data
            
                };
                case RESET_STATE:
              return initialState
          default:
            return state;      
    }
  }