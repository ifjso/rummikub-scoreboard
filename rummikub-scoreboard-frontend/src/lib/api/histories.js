import qs from 'qs';
import client from './client';

export const listHistories = ({ from, to, skip, limit }) => {
  const queryString = qs.stringify({ from, to, skip, limit });
  return client.get(`/api/histories?${queryString}`);
};
