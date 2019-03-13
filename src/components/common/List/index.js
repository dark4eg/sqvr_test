import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import uniqueId from 'lodash/uniqueId';

const List = ({
  containerClass,
  CardComponent,
  isLoadingPage,
  cellClass,
  list
}) => {
    return isLoadingPage ? (
            <CircularProgress variant="indeterminate" />
        ) : (
            list.map(item => (
                <CardComponent
                    key={`history-card-${uniqueId()}`}
                    data={item}
                />
            ))
        )
};

List.propTypes = {
  containerClass: PropTypes.string.isRequired,
  CardComponent: PropTypes.func.isRequired,
  isLoadingPage: PropTypes.bool.isRequired,
  cellClass: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

List.defaultProps = {
  headerClass: '',
  contentClass: ''
};

export default List;
