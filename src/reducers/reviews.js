import {
  GET_REVIEWS,
  DELETE_REVIEW
} from '../actions/reviews';

let initialState = {
  reviews: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {...state, reviews: action.payload};
    case DELETE_REVIEW:
      return {...state};
    default:
      return state;
  }
};
