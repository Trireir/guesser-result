import LoginConst from '../constants/login-actions-constants';

const LoginActions = {
  login() {
    return (dispatch) => {
      dispatch({
        type: LoginConst,
      });
    };
  },
};

export default LoginActions;
