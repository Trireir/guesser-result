import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import { IconButton } from '../../components';
import styles from './HeaderStyles';
import routes from '../../constants/routes';
import icons from '../../constants/icons-constants';
import logoIcon from '../../assets/world-soccer-icon.png';

const Header = ({ classes }) => (
  <div className={classes.container}>
    <div>
      <Link
        to={routes.home}
        style={{
          textDecoration: 'none',
        }}
      >
        <IconButton
          label="Clasificación"
          icon={icons.classification}
        />
      </Link>
      <Link
        to={routes.home}
        style={{
          textDecoration: 'none',
        }}
      >
        <IconButton
          label="Resultados"
          icon={icons.trophy}
        />
      </Link>
    </div>
    <div className={classes.center}>
      <img
        src={logoIcon}
        alt="Logo"
        className={classes.centralIcon}
      />
    </div>
    <div className={classes.right}>
      User: Test
    </div>
  </div>
);

Header.defaultProps = {
  classes: {},
};

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(Header);
