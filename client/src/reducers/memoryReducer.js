import { FETCH_MEMORIES } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MEMORIES:
      return action.payload || false;
    default:
      return state;
  }
}
