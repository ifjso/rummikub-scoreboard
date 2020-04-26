import client from './client';

export const readUser = async owner => await client.get(`/api/users/${owner}`);

export const updateUser = async ({ owner, score, emojiType, memo }) =>
  await client.patch(`/api/users/${owner}`, { score, emojiType, memo });
