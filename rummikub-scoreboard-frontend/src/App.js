import React from 'react';
import { Route } from 'react-router-dom';
import TopMenu from './components/Menu';
import ScoreBoardPage from './pages/ScoreBoardPage';
import HistoriesPage from './pages/HistoriesPage';

const App = () => (
  <>
    <TopMenu />
    <Route component={ScoreBoardPage} path="/" exact />
    <Route component={HistoriesPage} path="/histories" />
  </>
);

export default App;
