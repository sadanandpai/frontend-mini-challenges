import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  githubAuthProviver
} from '../firebase/firebase';
import { toast } from 'react-toastify';

export const login = uid => ({
  type: 'LOGIN',
  uid
});

export const startSignUp = (email, password) => () => {
  toast.success('Account created!🥳', {
    autoClose: 5000,
    closeButton: false,
    closeOnClick: true,
    hideProgressBar: true,
    position: 'bottom-center'
  });
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const startEmailLogin = (email, password) => () => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const startGoogleLogin = () => () => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const startFacebookLogin = () => () => {
  return firebase.auth().signInWithPopup(facebookAuthProvider);
};

export const startGithubLogin = () => () => {
  return firebase.auth().signInWithPopup(githubAuthProviver);
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => () => {
  return firebase.auth().signOut();
};