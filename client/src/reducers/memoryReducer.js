import { FETCH_MEMORIES } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MEMORIES:
      console.log(action.payload);
      return action.payload || false; // "" ==> falsy
    default:
      return state;
  }
}
