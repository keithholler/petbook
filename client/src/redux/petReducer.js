import {
    ADD_PET,
    GET_PETS,
    UPDATE_PET
  } from "./ActionTypes";
  const isEmpty = require("is-empty");

  export const petReducer = (state = { pets: [] }, action)=> {
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
          default:
            return state;      
    }
  }