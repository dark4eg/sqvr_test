import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

let apolloClient = null;

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: true,
    link: new HttpLink({
      uri: 'https://devsqvr.ru/api/graphql/v1',
      credentials: 'include'
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState) {
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
