import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS } from './types';
import { SET_CURRENT_USER } from './types';


export const registerUser = (userData, history) => dispatch => {
  // 请求
  axios.post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// 登录
export const loginUser = userData => dispatch => {
  axios.post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      // console.log(token);
      // 存储token到LS
      localStorage.setItem("jwtToken", token);
      // 设置axios的headers token
      setAuthToken(token);

      // 解析token
      const decoded = jwt_decode(token);
      // console.log(decoded);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// logout
export const logoutUser = () => dispatch => {
  // 删除ls
  localStorage.removeItem("jwtToken");
  // 干掉请求头
  setAuthToken(false);
  // 链接reducer
  dispatch(setCurrentUser({}));
}