import request from '../helpers/request';

export const GET_REVIEWS = 'GET_REVIEWS';
export const DELETE_REVIEW = 'DELETE_REVIEW';

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

export const deleteReview = (id) => {
  console.log('reviews in actions id: ', id)
  return dispatch => {
    request(`/api/reviews/${id}`, 'delete')
    .then(response => {
      dispatch({
        type: DELETE_REVIEW,
        payload: response.data.data
      });
    });
  }
};
