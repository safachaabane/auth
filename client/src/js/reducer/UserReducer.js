import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from "../const";

const initialState = {
  isLoading: false,
  user: null,
  isAuth: false,
  token: null,
};

const UserReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case REGISTER_USER:
    case LOGIN:
    case GET_USER:
      return { ...state, isLoading: true };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: payload.token,
        user: payload.user,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        user: payload.user,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload,
      };
      case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: null,
        token: null,
      };
    case REGISTER_USER_FAIL:
    case LOGIN_FAIL:
    case GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: null,
        token: null,
        errors:payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
