import App from 'cerebral';
import Devtools from 'cerebral/devtools';
import defaultState from './cerebral/defaultState';
import sequences from './cerebral/sequences';
import router from './cerebral/modules/router';
import initApollo from './cerebral/providers/apollo/init';
import ApolloCerebralProvider, { ApolloProviderError } from './cerebral/providers/apollo/provider';

let app;
let apolloClient;

export default () => {
  if (!apolloClient) {
    apolloClient = initApollo({});
  }
  if (app) {
    return app;
  }

  const providers = [ApolloCerebralProvider(apolloClient)];

  const state = defaultState({});
  const main = {
    state,
    modules: {
      router
    },
    sequences: {
      ...sequences
    },
    providers: {
      ...providers
    },
    catch: [
      [
        ApolloProviderError,
        ({ message, props: { error } }) => {
          console.log('apollo error', { Error, message, error });
        }
      ],
      [
        Error,
        ({ message, props: { error } }) => {
          console.log('Error happened', { Error, message, error });
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

  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    window.__APP_CONTROLLER__ = app;
  }

  return app;
};
