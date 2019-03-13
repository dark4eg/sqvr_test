import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import FilterList from '@material-ui/icons/FilterList';

const Header = ({ title, toggleFilter, toIndex, className }) => (
  <CardHeader
    className={className}
    title={title}
    action={[
      <IconButton key="filter" onClick={toggleFilter}>
        <FilterList />
      </IconButton>,
      <IconButton key="to-root" onClick={toIndex}>
        <Close />
      </IconButton>
    ]}
  />
);

Header.propTypes = {
  title: PropTypes.string,
  toggleFilter: PropTypes.func.isRequired,
  toIndex: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

Header.defaultProps = {
  title: ''
};

export default Header;
