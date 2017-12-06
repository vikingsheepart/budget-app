import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
  const uid = 'asdfghjkl';
  const firstname = 'Casey';
  const action = login(uid, firstname);
  expect(action).toEqual({
    type: 'LOGIN',
    uid,
    firstname
  });
});

test('should setup logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
