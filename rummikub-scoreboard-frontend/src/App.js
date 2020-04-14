import React from 'react';
import { Route } from 'react-router-dom';
import TopMenu from './components/Menu';
import ScoreBoardPage from './pages/ScoreBoardPage';
import HistoryPage from './pages/HistoryPage';
import './App.css';

const App = () => (
  <>
    <TopMenu />
    <Route component={ScoreBoardPage} path="/" exact />
    <Route component={HistoryPage} path="/histories" />
  </>
);

export default App;
