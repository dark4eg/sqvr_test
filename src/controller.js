import App from 'cerebral';
import Devtools from 'cerebral/devtools';
import page from 'page';
import qs from 'query-string';
import defaultState from './cerebral/defaultState';
import sequences from './cerebral/sequences';
import Root from "./components/pages/Root";
import NotFound from "./components/pages/NotFound";

let app;

export default () => {
    if (app) {
        return app;
    }
    const state = defaultState({});
    const main = {
        state,
        modules: {
            // ...yourModulesHere
        },
        sequences: {
            routeToRoot: route('/', sequences.routeToRoot),
            routeToRegistry: route('/history/registry/', sequences.routeToRegistry),
            // routeToUser: route('/history/user/:id', routeToUser),
            routeToNotFound: route('*', NotFound),
        },
        catch: [
            [
                Error,
                ({message, props: {error}}) => {
                    console.log('Error happened', {Error, message, error});
                }
            ]
        ]
    };

    app = App(main, {
        devtools:
            process.env.NODE_ENV === 'production'
                ? null
                : Devtools({
                    host: 'localhost:8585',
                    reconnect: false
                }),
        throwToConsole: false
    });
    app.on('initialized', () => {
        console.log('ggg initialized');
        page.start();
    });

    function route(url, sequence) {
        page(url, ({path, params, querystring}) => {
            const query = qs.parse(querystring)

            app.runSequence(path, sequence, {params, query})
        });

        return ({props}) => {
            const urlWithReplacedParams = Object.keys(props.params || {}).reduce((currentUrl, param) => {
                return currentUrl.replace(`:${param}`, props.params[param])
            }, url);
            const query = props.query ? '?' + qs.stringify(props.query) : '';

            page.show(urlWithReplacedParams + query);
        };
    };


    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        window.__APP_CONTROLLER__ = app;
    }

    return app;
};
