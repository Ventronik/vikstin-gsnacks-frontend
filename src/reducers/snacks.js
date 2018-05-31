import {
  GET_SNACKS
} from '../actions/snacks';

let initialState = {
  snacks: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SNACKS:
      return {...state, snacks: action.payload};
    default:
      return state;
  }
};
