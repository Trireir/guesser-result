import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import styles from './CenterTextStyles';

const CenterText = ({ classes, text }) => (
  <div className={classes.container}>
    {text}
  </div>
);

CenterText.defaultProps = {
  classes: {},
  text: '',
};

CenterText.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  text: PropTypes.string,
};

export default injectSheet(styles)(CenterText);
