import {
  GET_REVIEWS,
  DELETE_REVIEW,
  EDIT_REVIEW,
  CREATE_REVIEW
} from '../actions/reviews';

let initialState = {
  reviews: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {...state, reviews: action.payload};
    case DELETE_REVIEW:
      return {...state, reviews: action.payload};
    case EDIT_REVIEW:
      return {...state, reviews: action.payload};
      case CREATE_REVIEW:
        return {...state, reviews: action.payload};
    default:
      return state;
  }
};
