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
  cardClass,
  headerClass,
  contentClass,
  list
}) => (
  <div className={containerClass}>
    <Grid container spacing={24}>
      <Grid className={isLoadingPage ? cellClass : ''} item xs={12}>
        {isLoadingPage ? (
          <CircularProgress variant="indeterminate" />
        ) : (
          list.map(item => (
            <CardComponent
              key={`history-card-${uniqueId()}`}
              className={cardClass}
              cardContentCss={contentClass}
              cardHeaderCss={headerClass}
              data={item}
            />
          ))
        )}
      </Grid>
    </Grid>
  </div>
);

List.propTypes = {
  containerClass: PropTypes.string.isRequired,
  CardComponent: PropTypes.func.isRequired,
  isLoadingPage: PropTypes.bool.isRequired,
  cellClass: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  headerClass: PropTypes.string,
  contentClass: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

List.defaultProps = {
  headerClass: '',
  contentClass: ''
};

export default List;
