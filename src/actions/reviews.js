import request from '../helpers/request';

export const GET_REVIEWS = 'GET_REVIEWS';

export const getReviews = () => {
  return dispatch => {
    request('/api/reviews')
    .then(response => {
      dispatch({
        type: GET_REVIEWS,
        payload: response.data.data
      });
    });
  }
};
