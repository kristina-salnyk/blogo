import db from "../../configs/firebase";
import authSlice from "./reducer";

const register =
  ({ name, email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);

      dispatch(authSlice.actions.updateProfile({ id: user.uid }));
    } catch (error) {
      console.log(error.message);
    }
  };

const login =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };
const logout = () => async (dispatch, getState) => {};

export default { register, login, logout };
