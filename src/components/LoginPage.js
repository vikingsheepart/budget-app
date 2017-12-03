import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ onLogin }) => (
  <div>
    <button onClick={onLogin}>login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(startLogin())
});

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
