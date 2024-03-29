import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const defaultProps = {
  variant: 'contained'
};

const Btn = ({ onClick, text, isActive }) => {
  const color = isActive ? 'primary' : undefined;
  const props = {
    ...defaultProps,
    color,
    onClick
  };

  return <Button {...props}>{text}</Button>;
  // return <a href="/history/registry/">{text}</a>;
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

Btn.defaultProps = {
  isActive: false
};

export default Btn;
