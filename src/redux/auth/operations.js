import db from "../../configs/firebase";
import authSlice from "./reducer";

const register =
  ({ name, email, password }) =>
  async (dispatch, getState) => {
    try {
      await db.auth().createUserWithEmailAndPassword(email, password);

      const user = await db.auth().currentUser;
      console.log(1, user);
      await user.updateProfile({
        displayName: name,
      });

      const result = await db.auth().currentUser;
      console.log(2, result);

      dispatch(
        authSlice.actions.updateProfile({
          id: result.uid,
          name: result.displayName,
        })
      );
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
