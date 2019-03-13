import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import PropTypes from 'prop-types';
import * as Page from 'page';
import uniqueId from 'lodash/uniqueId';
import {connect} from '@cerebral/react';
import {sequences, state} from 'cerebral';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Filter from '../common/Filter';
import Header from '../common/Header';

const styles = theme => ({
    // root: {
    //     flexGrow: 1,
    //     margin: '10px 20px 10px 10px'
    // },
    content: {
        flexGrow: 1,
        width: '100%',
        textAlign: 'center',
    },
    card: {
        margin: '0 auto',
        boxShadow: 'none'
    },
    filtersAndList: {
        padding: '0 !important',
    },
    header: {
        borderBottom: '1px solid gray',
    },
    filtersClass: {
        borderBottom: '1px solid gray',
    }
});

const History = props => {
    const {get, routes, classes} = props;
    const page = get(state`current.page`);
    const toggleFilter = get(sequences`toggleFilter`);
    const changeFilter = get(sequences`changeFilter`);
    const changePage = get(sequences`changePage`);
    const {
        isLoadingPage,
        isLoadingPaging,
        isShowFilter,
        items: {list},
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

    const filterView = isShowFilter && <Filter filtersClass={classes.filtersClass} filters={filters} changeFilter={changeFilter}/>;
    const pageLoadingView = isLoadingPage && <CircularProgress variant="indeterminate"/>;

    const CardComponent = routes[page].componentChildren;
    const items =
        !isLoadingPage &&
        list.map(item => <CardComponent className={classes.filtersClass} key={`history-card-${uniqueId()}`} data={item}/>);
    const pagingLoadingView = !isLoadingPage && isLoadingPaging && (
        <CircularProgress variant="indeterminate"/>
    );
    const pagingView = !isLoadingPage && !isLoadingPaging && (
        <div className="paging" style={{margin: '0 50%'}}>
            <Button onClick={() => changePage({})}>Показать еще</Button>
        </div>
    );

    return (
        <div className={classes.content}>
            <Grid container spacing={24} xs={12}>
                <Card className={classes.card}>
                    <Header
                        title={routes[page].title}
                        toggleFilter={toggleFilter}
                        toIndex={() => Page.show('/')}
                        className={classes.header}
                    />
                    <CardContent className={classes.filtersAndList}>
                        {filterView}
                        {pageLoadingView}
                        {items}
                        {pagingView}
                        {pagingLoadingView}
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};

History.propTypes = {
    routes: PropTypes.shape({}).isRequired,
    get: PropTypes.func.isRequired
};

export default withStyles(styles)(connect(History));
