import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import styles from './IconButtonStyles';
import { Icon } from '../../components';

const IconButton = ({ classes, label, icon, onClick }) => (
  <Button
    onClick={onClick}
    className={classes.button}
  >
    <Icon icon={icon} />
    <span className={classes.text}>{label}</span>
  </Button>
);

IconButton.defaultProps = {
  classes: {},
  label: '',
  icon: () => {},
  onClick: () => {},
};

IconButton.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  label: PropTypes.string,
  icon: PropTypes.func,
  onClick: PropTypes.func,
};

export default injectSheet(styles)(IconButton);
