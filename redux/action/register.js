import axios from 'axios';
const registerRequest = () => {
  return {
    type: 'REGISTER_REQUEST',
  };
};
const registerSuccess = data => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: data,
  };
};
const registerError = error => {
  return {
    type: 'REGISTER_ERROR',
    payload: error,
  };
};
export const RegisterAuth = formdata => {
    return dispatch => {
      dispatch(registerRequest());
      axios({
        method: 'POST',
        data: {
          name: formdata.name,  
          email: formdata.email,
          password: formdata.password,
          role: formdata.role
        },
        url: `http://192.168.137.86:3001/api/v1/auth/register`
      })
        .then(res => {
          if (res.data.ID) {
            dispatch(registerSuccess(res.data));
          } else {
            alert(res.data.message);
            dispatch(registerError(res.data.message));
          }
        })
        .catch(err => {
          dispatch(loginError(err.response));
        });
    };
  };