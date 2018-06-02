import React from 'react';
import PropTypes from 'prop-types';

import iconPaths from '../../assets/icons';

function getPath(iconName) {
  const icon = iconPaths.icons.find(i => i.properties.name === iconName);

  if (icon) {
    return icon.icon.paths.join(' ');
  }
  return '';
}

const Icon = props => (
  <svg width="22" height="22" viewBox="0 0 1024 1024">
    <path d={getPath(props.icon)} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
