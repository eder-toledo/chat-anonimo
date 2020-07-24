import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './routes/home';
import Dashboard from './routes/dashboard';
import Chat from './routes/chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
