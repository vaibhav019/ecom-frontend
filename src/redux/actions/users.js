import axios from "axios";
import {

    GET_USERS_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCSESS,
    CLEAR_USER_DATA_REQUEST,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    CLEAR_ERRORS,
} from "../types/usertype";

export const GetUsersList = () => async (dispatch) => {
    try {

        dispatch({ type: GET_USERS_REQUEST });

        const { data } = await axios.get('http://localhost:9000/user/getAllUser', { headers: { authtoken: localStorage.getItem('authtoken') } });
        dispatch({
            type: GET_USERS_SUCSESS,
            payload: data,
        });
        console.log(data, "=-=-=-=-=-=-=-=-=-")

    } catch (error) {
        console.log(error,"0000000000000000000")
        console.log(error.message)
        dispatch({
            type: GET_USERS_FAIL,
            payload: error.message,
        });
    }
}
export const ClearFileData = () => async (dispatch) => {
    dispatch({ type: CLEAR_USER_DATA_REQUEST });
}

export const login = (Data) => async (dispatch) => {
    console.log(Data,"909090909090090009090")
    try {
      dispatch({ type: LOGIN_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `http://localhost:9000/user/login`,
        Data
      );
      dispatch({ type: LOGIN_SUCCESS, payload:data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };
  
 
  export const logout = () => async (dispatch) => {
  try {
    await axios.get(`http://localhost:9000/user/login`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(`http://localhost:9000/user/reset`, email, config);
  
      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
    } catch (error) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Reset Password
  export const resetPassword = (token, password) => async (dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(
        `http://localhost:9000/user/resetpassword/${token}`,
        password,
        config
      );
  
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };