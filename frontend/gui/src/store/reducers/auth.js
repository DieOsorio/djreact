import * as actionType from "../actions/actionType";
import { updatedObj } from "../utility";

const initialState = {
  token: null,
  error: null,
  loading: false
};

const authStart = (state, action) => {
  return updatedObj(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updatedObj(state, {
    token: action.token,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updatedObj(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updatedObj(state, {
    token: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_START:
      return authStart(state, action);
      break;
    case actionType.AUTH_SUCCESS:
      return authSuccess(state, action);
      break;
    case actionType.AUTH_FAIL:
      return authFail(state, action);
      break;
    case actionType.AUTH_LOGOUT:
      return authLogout(state, action);
      break;
    default:
      return state;
  }
};

export default reducer;
