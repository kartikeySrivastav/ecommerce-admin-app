import { authConstants } from "./constants";
import axios from "../helper/axios";

export const login = (user) => {
  return async (dispatch) => {
    console.log(user);
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post(`/admin/login`, {
      ...user,
    });
    if (res.status === 200) {
      const { token, ...userData } = res.data;
      console.log("Response Data:", res.data);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user: userData,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "failed to login" },
      });
    }
  };
};
