import { firebase, googleAuthProvider } from '../firebase/firebase';
import { setExpenses } from './expenses';

export const login = uid => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  // conform to the redux-thunk spec by returning a function
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return (dispatch) => {
    return firebase.auth().signOut()
      // reset the state to the initial state locally
      // prevent a flash of the previous user's data before startSetExpenses takes place
      .then(() => {
        dispatch(setExpenses([]));
      });
  };
};
