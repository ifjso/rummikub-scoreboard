import client from './client';

export const readUser = owner => client.get(`/api/users/${owner}`);
