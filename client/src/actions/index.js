import axios from 'axios';
import {
  FETCH_USER,
  FETCH_MEMORIES,
  FETCH_MEMORIES_SUCCESS,
  FETCH_MEMORIES_FAILURE,
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMemories = () => async dispatch => {
  dispatch({ type: FETCH_MEMORIES });
  try {
    const res = await axios.get('/api/memories');
    dispatch({ type: FETCH_MEMORIES_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_MEMORIES_FAILURE, payload: err });
  }
};

export const submitMemory = memory => async dispatch => {
  dispatch({ type: FETCH_MEMORIES });
  try {
    const res = await axios.post('/api/memories', memory);
    dispatch({ type: FETCH_MEMORIES_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_MEMORIES_FAILURE, payload: err });
  }
};

export const editMemory = memory => async dispatch => {
  dispatch({ type: FETCH_MEMORIES });
  try {
    const res = await axios.put(`/api/memories/${memory.id}`, memory);
    dispatch({ type: FETCH_MEMORIES_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_MEMORIES_FAILURE, payload: err });
  }
};

export const deleteMemory = memoryId => async dispatch => {
  dispatch({ type: FETCH_MEMORIES });
  try {
    const res = await axios.delete(`/api/memories/${memoryId}`);
    dispatch({ type: FETCH_MEMORIES_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_MEMORIES_FAILURE, payload: err });
  }
};
