import request from '../helpers/request';

export const GET_SNACKS = 'GET_SNACKS';

export const getSnacks = () => (
  dispatch => {
    request('/api/snacks')
    .then(response => {
      dispatch({
        type: GET_SNACKS,
        payload: response.data.data
      });
    });
  }
);
