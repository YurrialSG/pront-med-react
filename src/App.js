import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login/index';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Header>
            <Dashboard />
          </Header>
        </Route>
        <Route path="/users">
          <Header>
            <Users />
          </Header>
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
