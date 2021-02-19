import * as ActionTypes from "./ActionTypes";

export const addUniqueId = (uniqueId) => ({
  type: ActionTypes.ADD_UNIQUEID,
  payload: uniqueId,
});

export const addFeed = (feed) => ({
  type: ActionTypes.ADD_FEED,
  payload: feed,
});

export const postComment = (text,username) => ({
  type: ActionTypes.ADD_POST,
  payload: {text,username}
});

export const addUserInfo = (userId,userPick,profileInfo, isRegistered) => ({
  type: ActionTypes.ADD_USERINFO,
  payload: {userId,userPick,profileInfo,isRegistered},
});

export const addPetCard = (petId,petcard,petImage) => ({
  type: ActionTypes.ADD_PETCARD,
  payload: {petId,petcard,petImage}
});
