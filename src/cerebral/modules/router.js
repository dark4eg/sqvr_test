import page from 'page';import qs from 'query-string';import { routeToRoot, routeToRegistry, routeToNotFound } from '../sequences';import Root from "../../components/pages/Root";import NotFound from "../../components/pages/NotFound";export default ({ app }) => {    app.on('initialized', () => {        page.start();    });    function route(url, sequence) {        page(url, ({ path, params }) => {            console.log('url1', url);            app.runSequence(path, sequence, { params });        });        console.log('url2', url);        return ({ props }) => {            console.log('url3', url);            const urlWithReplacedParams = Object.keys(props.params || {}).reduce((currentUrl, param) => {                return currentUrl.replace(`:${param}`, props.params[param])            }, url);            page.show(urlWithReplacedParams);        }    }    return {        sequences: {            routeToRoot: route('/', routeToRoot),            routeToRegistry: route('/history/registry/', routeToRegistry),            routeToUsers: route('/history/user/:userId', routeToRegistry),            notFound: route('*', routeToNotFound)        }    }}