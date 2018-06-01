import request from '../helpers/request';

export const GET_REVIEWS = 'GET_REVIEWS';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const EDIT_REVIEW = 'EDIT_REVIEW';
export const CREATE_REVIEW = 'CREATE_REVIEW';

export const getReviews = () => (
  dispatch => {
    request('/api/reviews')
    .then(response => {
      dispatch({
        type: GET_REVIEWS,
        payload: response.data.data
      });
    });
  }
);

export const deleteReview = (id) => (
  dispatch => {
    request(`/api/reviews/${id}`, 'delete')
    .then(response => {
      return request('/api/reviews');
    })
    .then(response => {
      dispatch({
        type: DELETE_REVIEW,
        payload: response.data.data
      });
    })
  }
);

export const editReview = (id, title, text, rating, user, snack) => (
  dispatch => {
    request(`/api/reviews/${id}`, 'patch', {title, text, rating, user, snack})
    .then(response => {
      return request('/api/reviews');
    })
    .then(response => {
      dispatch({
        type: EDIT_REVIEW,
        payload: response.data.data
      });
    });
  }
);

export const createReview = (title, text, rating, user, snack) => (
  dispatch => {
    request('/api/reviews', 'post', {title, text, rating, user, snack})
    .then(response => {
      return request('/api/reviews');
    })
    .then(response => {
      dispatch({
        type: CREATE_REVIEW,
        payload: response.data.data
      });
    });
  }
);
