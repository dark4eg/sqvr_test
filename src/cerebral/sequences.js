import { set, debounce } from 'cerebral/factories';
import { state, props } from 'cerebral';
import * as actions from './actions';
import {toggleFilter} from "./actions";
import {setHistory} from "./actions";

const loadPage = [
    actions.setRoute,
    set(state`isLoadingPage`, true),
    actions.clearItems,
    actions.getHistory,
    actions.setHistory,
    set(state`isLoadingPage`, false)
];

export const routeToRoot = set(state`current.page`, 'root');

export const routeToRegistry = [
    // actions.setBrowserUrl,
    set(state`current.page`, 'registry'),
    set(state`history.isLoadingPage`, true),
    actions.clearItems,
    actions.getHistory,
    actions.setHistory,
    set(state`history.isLoadingPage`, false)
];

export const routeToNotFound = set(state`current.page`, 'notfound');

export const changePage = [
    set(state`history.isLoadingPaging`, true),
    actions.nextMeta,
    actions.getHistory,
    actions.addToHistory,
    set(state`history.isLoadingPaging`, false),
];

export const changeFilter = [
    actions.setFilter,
    set(state`history.isLoadingPage`, true),
    actions.clearItems,
    debounce(100),
    {
        continue: [
            actions.getHistory,
            actions.setHistory,
            set(state`history.isLoadingPage`, false),
        ],
        discard: []
    },
];

export default {
    loadPage,
    changePage,
    routeToRoot,
    routeToRegistry,
    routeToNotFound,
    toggleFilter,
    changeFilter,
    setHistory,
};
