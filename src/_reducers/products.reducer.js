import { userConstants } from '../_constants';

export function products(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    default:
      return state
  }
}