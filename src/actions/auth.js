import request from '../helpers/request';

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';

export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogin = ({email, password}, history) => (
  dispatch => {
    dispatch({type: USER_LOGIN_PENDING});
    request('/auth/token', 'post', {email, password})
    .then(response => {
      localStorage.setItem('token', response.data.token);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response
      });
      history.push('/settings');
    })
    .catch(error => {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: error
      });
      history.push('/login');
    });
  }
);

export const userSignup = (newUser, history) => (
  dispatch => {
    dispatch({type: USER_SIGNUP_PENDING});
    request('/shops', 'post', {newUser})
    .then(response => {
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: response
      });
      history.push('/login');
    })
    .catch(error => {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: error
      });
    });
  }
);

export const userLogout = () => (
  dispatch => {
    dispatch({type: USER_LOGOUT});
  }
);
