import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Container as CerebralContainer } from '@cerebral/react';
import appController from './controller';
import Navigate from './components/Navigate';

let controller = appController();

class App extends Component {
  render() {

    return (
      <CerebralContainer app={controller}>
          <BrowserRouter>
              <Navigate />
          </BrowserRouter>
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
