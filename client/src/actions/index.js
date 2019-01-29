import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

import {
  FETCH_USER,
  FETCH_MEMORIES,
  FETCH_MEMORIES_SUCCESS,
  FETCH_MEMORIES_FAILURE,
} from './types';

const DATE_FORMAT = 'YYYY-MM';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

function groupMemories(data) {
  data.forEach(
    datum =>
      (datum['groupingDate'] = moment(datum['createdAt']).format(DATE_FORMAT))
  );

  return _.chain(data)
    .groupBy('groupingDate')
    .toPairs()
    .map(pair => _.zipObject(['groupingDate', 'memories'], pair))
    .value();
}

async function sendRequest(dispatch, method, url, data = null) {
  dispatch({ type: FETCH_MEMORIES });
  try {
    const res = await axios({ method, url, data });
    const grouped_data = groupMemories(res.data);
    dispatch({ type: FETCH_MEMORIES_SUCCESS, payload: grouped_data });
  } catch (err) {
    dispatch({ type: FETCH_MEMORIES_FAILURE, payload: err });
  }
}

export const fetchMemories = () => async dispatch => {
  sendRequest(dispatch, 'get', '/api/memories');
};

export const submitMemory = memory => async dispatch => {
  sendRequest(dispatch, 'post', '/api/memories', memory);
};

export const editMemory = memory => async dispatch => {
  sendRequest(dispatch, 'put', `/api/memories/${memory.id}`, memory);
};

export const deleteMemory = memoryId => async dispatch => {
  sendRequest(dispatch, 'delete', `/api/memories/${memoryId}`);
};
