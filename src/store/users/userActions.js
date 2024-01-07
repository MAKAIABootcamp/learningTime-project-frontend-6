import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setError, setIsAuthenticate, setUser } from "./userSlice";

import { auth } from "../../firebase/firebaseConfig";

export const createAnAccountAsync = (newUser) => async (dispatch) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.password
    );
    await updateProfile(auth.currentUser, {
      displayName: newUser.name,
      photoURL: newUser.photoURL,
    });
    console.log(user);
    {
      /*Disparamos el setUser para actualizar */
    }
    dispatch(
      setUser({
        id: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        accessToken: user.accessToken,
      })
    );
    dispatch(setIsAuthenticate(true));
    dispatch(setError(false));
  } catch (error) {
    console.warn(error);
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    );
  }
};

export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  return async (dispatch) => {
    try {
      const userCredencial = await signInWithPopup(auth, provider);
      dispatch(setIsAuthenticate(true));
      dispatch(setUser(userCredencial.user));
    } catch (error) {
      console.warn(error);
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};

export const loginWithEmailAndPassword =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch(setIsAuthenticate(true));
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          name: user.displayName,
          photoURL: user.photoURL,
          accessToken: user.accessToken,
        })
      );
      dispatch(setError(false));
    } catch (error) {
      dispatch(setIsAuthenticate(false));
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
