import * as ActionTypes from "./ActionTypes";

export const addUniqueId = (uniqueId) => ({
  type: ActionTypes.ADD_UNIQUEID,
  payload: uniqueId,
});

export const addFeed = (feed) => ({
  type: ActionTypes.ADD_FEED,
  payload: feed,
});

export const postComment = (text) => ({
  type: ActionTypes.ADD_POST,
  payload: text,
});

export const addUserInfo = (userId,userPick,userInfo) => ({
  type: ActionTypes.ADD_USERINFO,
  payload: {userId,userPick,userInfo},
});

