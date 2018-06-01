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

export const editReview = (event, stars) => {
  event.preventDefault()
  return dispatch => {
    request(`/api/reviews/${event.target.id}`, 'patch', {      //NEED ID
      title: event.target.title.value,
      text: event.target.text.value,
      rating: stars,                                               //CHANGE ME
      user: 1,                                                 //CHANGE ME
      snack: 2,                                                //CHANGE ME
    } )
    .then(response => {
      return request('/api/reviews');
    })
    .then(response => {
      dispatch({
        type: EDIT_REVIEW,
        payload:response.data.data
      });
    })
  }
}

export const createReview = (event, stars) => {
  event.preventDefault()
  return dispatch => {
    request(`/api/reviews`, 'post', {
      title: event.target.title.value,
      text: event.target.text.value,
      rating: stars,                                  //CHANGE ME
      user: 1,                                    //CHANGE ME
      snack: 2,                                   //CHANGE ME
    })
    .then(response => {
      return request('/api/reviews');
    })
    .then(response => {
      dispatch({
        type: CREATE_REVIEW,
        payload:response.data.data
      });
    })
  }
}
