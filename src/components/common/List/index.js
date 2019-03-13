import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import uniqueId from 'lodash/uniqueId';

const List = ({ CardComponent, isLoadingPage, list }) => {
  return isLoadingPage ? (
    <CircularProgress variant="indeterminate" />
  ) : (
    list.map(item => <CardComponent key={`history-card-${uniqueId()}`} data={item} />)
  );
};

List.propTypes = {
  CardComponent: PropTypes.func.isRequired,
  isLoadingPage: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default List;
