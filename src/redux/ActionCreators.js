import * as ActionTypes from "./ActionTypes";

export const addUniqueId = (uniqueId) => ({
  type: ActionTypes.ADD_UNIQUEID,
  payload: uniqueId,
});

export const addFeed = (id, feed) => ({
  type: ActionTypes.ADD_FEED,
  payload: { id: id, feed: feed },
});

export const postComment = (text) => ({
  type: ActionTypes.ADD_POST,
  payload: text,
});
