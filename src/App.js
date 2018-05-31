import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import TopNav from './components/TopNav';
import Signup from './components/Signup';
import Snacks from './components/Snacks';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <div>
      <TopNav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/snacks" component={Snacks} />
          <Route path='/reviews' component={Reviews} />
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;
