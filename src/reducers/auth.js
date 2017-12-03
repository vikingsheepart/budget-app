export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { uid: action.uid }; // uid is a string of the user's unique id
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
