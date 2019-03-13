import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const Paging = ({ containerClass, cellClass, isLoadingPaging, changePage }) => (
  <div className={containerClass}>
    <Grid container spacing={24}>
      <Grid className={cellClass} item xs={12}>
        {isLoadingPaging ? (
          <CircularProgress variant="indeterminate" />
        ) : (
          <Button onClick={() => changePage({})}>Показать еще</Button>
        )}
      </Grid>
    </Grid>
  </div>
);

Paging.propTypes = {
  containerClass: PropTypes.string.isRequired,
  cellClass: PropTypes.string.isRequired,
  isLoadingPaging: PropTypes.bool.isRequired,
  changePage: PropTypes.func.isRequired
};

export default Paging;
