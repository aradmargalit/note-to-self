import {
  FETCH_MEMORIES,
  FETCH_MEMORIES_SUCCESS,
  FETCH_MEMORIES_FAILURE,
} from '../actions/types';

const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MEMORIES:
      return { ...state, isFetching: true };
    case FETCH_MEMORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
        memoryList: action.payload,
      };
    case FETCH_MEMORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
}
