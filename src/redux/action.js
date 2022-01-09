import { authSlice } from "../redux/slice";
const { actions: slice } = authSlice;

//login actions
export const LoginAction = (phone) => (dispatch) => {
  dispatch(slice.setLogin(phone));
};
