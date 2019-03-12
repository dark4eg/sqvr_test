import { set, concat } from 'cerebral/factories';
import { state, props } from 'cerebral';
import * as actions from './actions';
import {toggleCard} from "./actions";
import {toggleFilter} from "./actions";
import {changeFilter} from "./actions";
import {addToHistory} from "./actions";
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
    set(state`isLoadingPaging`, true),
    actions.nextMeta,
    actions.getHistory,
    actions.addToHistory,
    set(state`isLoadingPaging`, false),
];

export default {
    loadPage,
    changePage,
    routeToRoot,
    routeToRegistry,
    routeToNotFound,
    toggleCard,
    toggleFilter,
    changeFilter,
    setHistory,
};
