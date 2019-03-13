import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { state } from 'cerebral';
import { connect } from '@cerebral/react';
import * as Routes from './routes';
import DefaultLayout from '../layouts/DefaultLayout';

const Navigate = ({ get, routes }) => {
  const { page } = get(state.current);
  const route = routes[page];
  const Component = route && route.component;

  return (
    <Fragment>
      <DefaultLayout>
        <Component routes={routes} />
      </DefaultLayout>
    </Fragment>
  );
};

Navigate.propTypes = {
  routes: PropTypes.shape({}),
  get: PropTypes.func.isRequired
};

Navigate.defaultProps = {
  Routes
};

export default connect(Navigate);
