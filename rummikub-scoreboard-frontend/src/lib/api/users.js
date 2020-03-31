import client from './client';

export const readUser = owner => client.get(`/api/users/${owner}`);

export const updateUser = ({ owner, score, emojiType, memo }) =>
  client.patch(`/api/users/${owner}`, { score, emojiType, memo });
