import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../constants/routes';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={routes.login} />
    )}
  />
);

PrivateRoute.defaultProps = {
  component: () => {},
  isAuthenticated: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.login.auth,
});


export default connect(mapStateToProps)(PrivateRoute);
