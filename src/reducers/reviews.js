import {
  GET_REVIEWS
} from '../actions/reviews';

let initialState = {
  reviews: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {...state, reviews: action.payload};
    default:
      return state;
  }
};
