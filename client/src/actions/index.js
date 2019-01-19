import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  //FETCH USER because we want user-related models to update on this
  dispatch({ type: FETCH_USER, payload: res.data });
};
