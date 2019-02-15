import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { Container as CerebralContainer } from '@cerebral/react';
import appController from './controller';
import History from './containers/HistoryList'


let controller = appController();

function PageNotFound() {
  return (
    <Typography variant="h1">
      Page not found. Please start to search from {<Link to="/">main</Link>}
    </Typography>
  );
}

const Root = (props) => {
  return (
    <>
      <History />
    </>
  );
};

class App extends Component {
  render() {
    return (
      <CerebralContainer app={controller}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Root} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </CerebralContainer>
    );
  }
}

export default App;
