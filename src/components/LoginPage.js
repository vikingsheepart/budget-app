import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ onLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>Manage your wealth and better your life</p>
      <button className="button" onClick={onLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(startLogin())
});

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
