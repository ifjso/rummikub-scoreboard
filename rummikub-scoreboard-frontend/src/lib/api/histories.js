import qs from 'qs';
import client from './client';

export const listHistories = async ({ page, perPage }) => {
  const queryString = qs.stringify({ page, perPage });
  return await client.get(`/api/histories?${queryString}`);
};
