import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Menu from '../common/Menu';

const DefaultLayout = ({ page, children }) => {
  return (
    <Fragment>
      <Menu currentPage={page} />
      <div className="page">{children}</div>
    </Fragment>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  page: PropTypes.string.isRequired
};

export default DefaultLayout;
