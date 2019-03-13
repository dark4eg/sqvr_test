import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { state } from 'cerebral';
import { connect } from '@cerebral/react';
import routes from './routes';
import DefaultLayout from '../layouts/DefaultLayout';

const Navigate = ({ get, routes }) => {
  console.log('routes', routes);
  const { page } = get(state.current);
  const route = routes[page];
  const Component = route && route.component;

  return (
    <Fragment>
      <DefaultLayout>
        <Component />
      </DefaultLayout>
    </Fragment>
  );
};

Navigate.propTypes = {
  routes: PropTypes.shape({})
};

Navigate.defaultProps = {
  routes
};

export default connect(Navigate);
