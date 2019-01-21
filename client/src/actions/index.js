import axios from 'axios';
import { FETCH_USER, FETCH_MEMORIES } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMemories = () => async dispatch => {
  const res = await axios.get('/api/memories');
  dispatch({ type: FETCH_MEMORIES, payload: res.data });
};

export const submitMemory = memory => async dispatch => {
  const res = await axios.post('/api/memories', memory);
  dispatch({ type: FETCH_MEMORIES, payload: res.data });
};

export const deleteMemory = memoryId => async dispatch => {
  const res = await axios.post('/api/deleteMemory/', { id: memoryId });
  dispatch({ type: FETCH_MEMORIES, payload: res.data });
};
