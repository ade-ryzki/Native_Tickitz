import axios from 'axios';
const loginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};
const loginSuccess = data => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: data,
  };
};
const loginError = error => {
  return {
    type: 'LOGIN_ERROR',
    payload: error,
  };
};
export const LoginAuth = formdata => {
    return dispatch => {
      dispatch(loginRequest());
      axios({
        method: 'POST',
        data: {
          email: formdata.email,
          password: formdata.password,
        },
        url: `http://192.168.137.86:3001/api/v1/auth/login`
      })
        .then(res => {
          if (res.data.ID) {
            dispatch(loginSuccess(res.data));
          } else {
            alert(res.data.message);
            dispatch(loginError(res.data.message));
          }
        })
        .catch(err => {
          dispatch(loginError(err.response));
        });
    };
  };