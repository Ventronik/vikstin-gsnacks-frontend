import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import TopNav from './components/TopNav';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
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
          <Route path="/profile" component={UserProfile} />
          <Route path='/reviews' component={Reviews} />
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;
