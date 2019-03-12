import { state, concat } from 'cerebral';import gql from 'graphql-tag';const allHistory = (filters) => gql`query allPosts($limit: Int!, $offset: Int!) {  users {          history(limit: $limit, offset: $offset, historyType: [${filters}]) {            date            historyType            systemText            documents {              id              mimetype            }            body            user {              id              firstName              lastName              avatarUrl            }            updater {              id              firstName              lastName              avatarUrl            }          }    }}`;export const getHistory = async ({apollo, get, props: {limit, offset, userId}}) => {    const filters = get(state.history.filters);    const meta = get(state.history.items.meta);    const filtersActive = filters.filter(f => f.isActive).map(i => i.value).join(',');    const currentOffset = offset || meta.offset;    const currentLimit = limit || meta.limit;    // const query = userId ? {    //     query: allHistoryUser,    //     variables: {    //         limit,    //         offset,    //         filters,    //         userId    //     },    // } : {    //     query: allHistory,    //     variables: {    //         limit,    //         offset,    //         filters,    //     },    // };    const query = {        query: allHistory(filtersActive),        variables: {            offset: currentOffset,            limit: currentLimit,        },    };    const queryResult = await apollo.query(query);    const {data} = queryResult;    console.log('data', data, currentOffset, currentLimit);    return {        list: data.users.history,        meta: {            limit: currentLimit,            offset: currentOffset,        }    };};const CONST_LIMIT = 10;export const setRoute = ({ store, get, route }) => {    store.set(state.current.route, route);};export const setFilter = ({store, get, props}) => {    const { id } = props;    const list = get(state.history.filters);    const nextFilter = list.map((i) => {        if(i.id === id) {            return {                ...i,                isActive: !i.isActive,            }        }        return i;    });    store.set(state.history.filters, nextFilter)};export const toggleFilter = ({store, get }) => {    const isShowFilter = get(state.history.isShowFilter);    store.set(state.history.isShowFilter, !isShowFilter);};export const addToHistory = ({store, get, props}) => {    store.concat(state.history.items.list, props.list);};export const nextMeta = ({store, get, props}) => {    const { offset, limit } = get(state.history.items.meta);    store.set(state.history.items.meta, { limit, offset: offset + limit });};export const clearItems = ({store, get }) => {    store.set(state.history.items, {        list: [],        meta: {            limit: CONST_LIMIT,            offset: 0,        }    });};export const setHistory = ({store, get, props}) => {    console.log('props', props);    store.set(state.history.items, {        list: props.list,        meta: props.meta,    });};