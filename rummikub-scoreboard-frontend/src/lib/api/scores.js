import client from './client';

export const readScore = owner => client.get(`/api/scores/${owner}`);

export const updateScore = ({ owner, score }) =>
  client.patch(`/api/scores/${owner}`, { score });
