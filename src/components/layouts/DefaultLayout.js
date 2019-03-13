import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Menu from '../common/Menu';

const DefaultLayout = ({ children }) => {
  return (
    <Fragment>
      <div className="header">
        <Menu />
      </div>
      <div className="page">{children}</div>
    </Fragment>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default DefaultLayout;
