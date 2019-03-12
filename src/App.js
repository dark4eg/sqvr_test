import React, { Component } from 'react';
import { Container as CerebralContainer } from '@cerebral/react';
import appController from './controller';
import Navigate from './components/Navigate';
import './App.css';

let controller = appController();

class AppContainer extends Component {
  render() {
    return (
        <CerebralContainer app={controller}>
            <Navigate />
        </CerebralContainer>
    );
  }
}

export default AppContainer;
