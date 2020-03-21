import qs from 'qs';
import client from './client';

export const listHistories = ({ page, perPage }) => {
  const queryString = qs.stringify({ page, perPage });
  return client.get(`/api/histories?${queryString}`);
};
