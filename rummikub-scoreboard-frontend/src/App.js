import React from 'react';
import { Route } from 'react-router-dom';
import ScoreBoardPage from './pages/ScoreBoardPage';
import './App.css';

const App = () => (
  <>
    <Route page="/" exact component={ScoreBoardPage} />
  </>
);

export default App;
