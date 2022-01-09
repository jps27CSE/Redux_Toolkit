import { authSlice } from "../redux/slice";
const { actions: slice } = authSlice;

//login actions
export const LoginAction = (phone) => (dispatch) => {
  dispatch(slice.setLogin(phone));
};

//logout actions
export const LogoutAction = () => (dispatch) => {
  dispatch(slice.setLogout());
};
