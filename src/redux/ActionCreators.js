import * as ActionTypes from "./ActionTypes";

export const addUniqueId = (uniqueId) => ({
  type: ActionTypes.ADD_UNIQUEID,
  payload: uniqueId,
});

export const postComment = (text,postImage) => ({
  type: ActionTypes.ADD_POST,
  payload: {text,postImage}
});

export const addUserInfo = (userId,userPick,profileInfo, isRegistered) => ({
  type: ActionTypes.ADD_USERINFO,
  payload: {userId,userPick,profileInfo,isRegistered},
});

export const addPetCard = (petId,petcard,petImage) => ({
  type: ActionTypes.ADD_PETCARD,
  payload: {petId,petcard,petImage}
});
