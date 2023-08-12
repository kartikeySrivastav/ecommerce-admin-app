import { authConstants } from "../actions/constants";

const intialState = {
  token: null,
  user: {},
  authenticate: false,
  authenticating: false,
};

export default (state = intialState, action) => {
  console.log("reducer action:", action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
  }
  return state;
};
