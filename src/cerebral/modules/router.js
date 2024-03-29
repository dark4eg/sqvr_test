import page from 'page';
import { routeToRoot, routeToRegistry, routeToUser, routeToNotFound } from '../sequences';

export default ({ app }) => {
  app.on('initialized', () => {
    page.start();
  });

  function route(url, sequence) {
    page(url, ({ path, params }) => {
      app.runSequence(path, sequence, { params });
    });

    return ({ props }) => {
      const urlWithReplacedParams = Object.keys(props.params || {}).reduce((currentUrl, param) => {
        return currentUrl.replace(`:${param}`, props.params[param]);
      }, url);

      page.show(urlWithReplacedParams);
    };
  }

  return {
    sequences: {
      routeToRoot: route('/', routeToRoot),
      routeToRegistry: route('/history/registry/', routeToRegistry),
      routeToUsers: route('/history/user/:userId', routeToUser),
      notFound: route('*', routeToNotFound)
    }
  };
};
