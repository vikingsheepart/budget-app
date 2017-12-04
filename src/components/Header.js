import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ onLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={onLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(startLogout())
});

Header.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default connect(undefined, mapDispatchToProps)(Header);
