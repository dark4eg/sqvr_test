import { set } from 'cerebral/factories';
import { state, props } from 'cerebral';
import * as actions from './actions';

const loadPage = [
    actions.setRoute,
    set(state`isLoadingPage`, true),
    actions.clearItems,
    actions.getHistory,
    actions.setHistory,
    set(state`isLoadingPage`, false)
];

const changePage = [
    set(state`isLoadingPaging`, true),
    actions.getHistory,
    actions.addHistory,
    set(state`isLoadingPaging`, false),
];

export const routeToRoot = set(state`current.page`, 'root');

export const routeToRegistry = [
    set(state`current.page`, 'registry'),
    set(state`isLoadingPage`, true),
    actions.clearItems,
    actions.getHistory,
    actions.setHistory,
    set(state`isLoadingPage`, false)
];

export const routeToNotFound = set(state`current.page`, 'not-found');;

export default [loadPage, changePage];
