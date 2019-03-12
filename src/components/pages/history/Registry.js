import Typography from '@material-ui/core/Typography';import Card from '@material-ui/core/Card';import Button from '@material-ui/core/Button';import CardContent from '@material-ui/core/CardContent';import React, {Fragment} from 'react';import {connect} from '@cerebral/react';import {sequences, state} from 'cerebral';import Filter from '../../common/Filter';import Header from '../../common/Header';import RegistryCard from '../../common/Cards/Registry';const Registry = (props) => {    console.log('Registry props', props);    const { get } = props;    console.log('registry props a', get(state`history`));    const routeTo = get(sequences`routeToUser`);    const toggleCard = get(sequences`toggleCard`);    const toggleFilter = get(sequences`toggleFilter`);    const changeFilter = get(sequences`changeFilter`);    const changePage = get(sequences`changePage`);    const {isLoadingPage, isShowFilter, items: {list, meta}, filters, error} = get(state`history`);    console.log('meta', meta);    // const activeFilters = props.filters.filter(i => i.isActive).map(i => ` ${i.value}`);    // const gqlHistoryTypeFilter = activeFilters.length > 0 ? `, historyType: [${activeFilters}]` : '';    // console.log('wtf?', gqlHistoryTypeFilter);    // const {filterIsActive, toggleFilter, changeFilter, filters} = props;    let resultView;    if (isLoadingPage) {        resultView = <p>Loading...</p>;    } else if (error) {        resultView = <p><code>            {error}        </code></p>;    }    if (resultView) {        return resultView;    }    return (        <div className="content">            <Card className={''}>                <Header toggleFilter={toggleFilter}/>                <CardContent>                    {isShowFilter && <Filter filters={filters} changeFilter={changeFilter}/>}                    {list.map((item, i) => (                        <RegistryCard key={i} data={item}/>                    ))}                    <div className="paging" style={{margin: '0 50%'}}>                        <Button onClick={() => changePage({})}>Показать еще</Button>                    </div>                </CardContent>            </Card>        </div>    );};export default connect(Registry);