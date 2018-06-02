import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Header from './Header';

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    width: '93%',
    minHeight: '91vh',
    background: 'white',
    alignSelf: 'center',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    marginTop: '10px',
    marginBottom: '5px',
  },
});

const withHeader = (Component) => {
  class WithHeader extends React.Component { // eslint-disable-line
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.container}>
          <Header />
          <div className={classes.paper}>
            <Component />
          </div>
        </div>
      );
    }
  }

  WithHeader.defaultProps = {
    classes: {},
  };

  WithHeader.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
  };

  return injectSheet(styles)(WithHeader);
};

export default withHeader;
