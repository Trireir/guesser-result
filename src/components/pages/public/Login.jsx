import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './LoginStyles';
import { LoginActions } from '../../../actions';
import routes from '../../../constants/routes';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toHome: false,
    };

    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

  onLoginButtonClick() {
    this.props.actions.LoginActions.login();
    this.setState({
      toHome: true,
    });
  }

  render() {
    const { classes } = this.props;
    if (this.state.toHome) {
      return (
        <Redirect to={routes.home} />
      );
    }
    return (
      <div className={classes.container}>
        <div className={classes.inputsContainer}>
          <div
            className={classes.logo}
          />
          <TextField
            className={classes.elementSeparation}
            label="Name"
          />
          <TextField
            className={classes.elementSeparation}
            label="Password"
          />
          <Button
            className={classes.elementSeparation}
            variant="raised"
            color="primary"
            onClick={this.onLoginButtonClick}
          >
            Log In
          </Button>
          <Link to={routes.signup} className={[classes.elementSeparation, classes.signUpLink].join(' ')}>
            You still do not have an account? Click here to sign up!
          </Link>
        </div>
      </div>
    );
  }
}

Login.defaultProps = {
  classes: {},
  actions: {},
};

Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  actions: PropTypes.objectOf(PropTypes.func),
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: {
    LoginActions: bindActionCreators(LoginActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Login));
