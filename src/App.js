import React from 'react';
import { Container as CerebralContainer } from '@cerebral/react';
import appController from './controller';
import Navigate from './components/Navigate';
import './App.css';

const controller = appController();

const AppContainer = () => (
  <CerebralContainer app={controller}>
    <Navigate />
  </CerebralContainer>
);

export default AppContainer;
