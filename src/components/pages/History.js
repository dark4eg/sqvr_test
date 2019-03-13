import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import PropTypes from 'prop-types';
import * as Page from 'page';
import { connect } from '@cerebral/react';
import { sequences, state } from 'cerebral';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Filter from '../common/Filter';
import Header from '../common/Header';
import Paging from '../common/Paging';
import List from '../common/List';

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
  content: {
    flexGrow: 1,
    width: 'auto'
  },
  card: {
    margin: '0 auto',
    boxShadow: 'none'
  },
  filtersAndList: {
    padding: '0 !important'
  },
  header: {
    borderBottom: '1px solid gray'
  },
  filtersClass: {
    borderBottom: '1px solid gray'
  },
  cardClass: {
    borderBottom: '1px solid gray'
  },
  cell: {
    width: '100%',
    textAlign: 'center'
  },
  paging: {
    marginTop: 20,
    marginBottom: 50
  },
  items: {
    marginTop: 20,
    width: '100%'
  }
});

const History = props => {
  const { get, routes, classes } = props;
  const page = get(state`current.page`);
  const toggleFilter = get(sequences`toggleFilter`);
  const changeFilter = get(sequences`changeFilter`);
  const changePage = get(sequences`changePage`);
  const {
    isLoadingPage,
    isLoadingPaging,
    isShowFilter,
    items: { list },
    filters,
    error
  } = get(state`history`);

  let resultView;
  if (error) {
    resultView = (
      <p>
        <code>{error}</code>
      </p>
    );
  }

  if (resultView) {
    return resultView;
  }

  const filterView = isShowFilter && (
    <Filter filtersClass={classes.filtersClass} filters={filters} changeFilter={changeFilter} />
  );
  const CardComponent = routes[page].componentChildren;

  return (
    <div className={classes.content}>
      <Grid container spacing={24}>
        <Grid container>
          <Card className={classes.card}>
            <Header
              title={routes[page].title}
              toggleFilter={toggleFilter}
              toIndex={() => Page.show('/')}
              className={classes.header}
            />
            <CardContent className={classes.filtersAndList}>
              {filterView}
              <List CardComponent={CardComponent} isLoadingPage={isLoadingPage} list={list} />
              <Paging
                containerClass={classes.paging}
                cellClass={classes.cell}
                isLoadingPaging={isLoadingPaging}
                changePage={changePage}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

History.propTypes = {
  routes: PropTypes.shape({}).isRequired,
  get: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(connect(History));
