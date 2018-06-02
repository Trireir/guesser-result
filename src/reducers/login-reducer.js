import LoginConst from '../constants/login-actions-constants';

const initialState = {
  auth: true,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LoginConst:
      return {
        ...state,
        auth: true,
      };
    default:
      return state;
  }
};

export default login;
