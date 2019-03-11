import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container as CerebralContainer } from '@cerebral/react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import appController from './controller';
import Navigate from './components/Navigate';
import './App.css';

let controller = appController();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: 'include',
  uri: 'https://devsqvr.ru/api/graphql/v1'
});

class AppContainer extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <CerebralContainer app={controller}>
            <Navigate />
        </CerebralContainer>
      </ApolloProvider>
    );
  }
}

export default AppContainer;

// {
//     users {
//         history(limit: 10, offset: 0, historyType: [AddNewOwner, DeleteOwner, Import]) {
//             date
//             historyType
//             systemText
//             documents {
//                 id
//                 mimetype
//             }
//             body
//             user {
//                 id
//                 firstName
//                 lastName
//             }
//             updater {
//                 id
//                 firstName
//                 lastName
//                 avatarUrl
//             }
//
//         }
//     }
// }

// AddNewOwner - добавлен собственник
// Import - Был импорт реестра
// DeleteOwner - Удален собственник
