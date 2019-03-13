import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import * as Page from 'page';
import { connect } from '@cerebral/react';
import { sequences, state } from 'cerebral';
import CircularProgress from '@material-ui/core/CircularProgress';
import Filter from '../common/Filter';
import Header from '../common/Header';
import routes from '../Navigate/routes';

const Registry = props => {
  const { get } = props;
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

  const filterView = isShowFilter && <Filter filters={filters} changeFilter={changeFilter} />;
  const pageLoadingView = isLoadingPage && <CircularProgress variant="indeterminate" />;

  const CardComponent = routes[page].componentChildren;
  const items = !isLoadingPage && list.map((item, i) => <CardComponent key={i} data={item} />);
  const pagingLoadingView = !isLoadingPage && isLoadingPaging && (
    <CircularProgress variant="indeterminate" />
  );
  const pagingView = !isLoadingPage && !isLoadingPaging && (
    <div className="paging" style={{ margin: '0 50%' }}>
      <Button onClick={() => changePage({})}>Показать еще</Button>
    </div>
  );

  // const toIndex = ;

  return (
    <div className="content">
      <Card className="">
        <Header
          title={routes[page].title}
          toggleFilter={toggleFilter}
          toIndex={() => Page.show('/')}
        />
        <CardContent>
          {filterView}
          {pageLoadingView}
          {items}
          {pagingView}
          {pagingLoadingView}
        </CardContent>
      </Card>
    </div>
  );
};

export default connect(Registry);
