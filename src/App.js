import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Container as CerebralContainer } from '@cerebral/react';
import appController from './controller';
import Navigate from './components/Navigate';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

let controller = appController();

class App extends Component {
  render() {
    const routeInfo = {
      path: window.location.pathname
    };

    return (
      <CerebralContainer app={controller}>
        <Provider store={configureStore({ routeInfo })}>
          <BrowserRouter>
            <Navigate />
          </BrowserRouter>
        </Provider>
      </CerebralContainer>
    );
  }
}

export default App;

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
