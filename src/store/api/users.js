import axios from 'axios';
import { defaultUrl } from './config';

export const getUsers = () => {
  return axios.get(`${defaultUrl}`)
};

export const updateUser = user => {
  return axios({
    method: 'put',
    url: `${defaultUrl}/${user.id}`,
    data: {
      ...user,
      active: !user.active
    }
  })
};
