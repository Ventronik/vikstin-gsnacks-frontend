import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from './actions/auth';

import Login from './components/Login';
import TopNav from './components/TopNav';
import Signup from './components/Signup';
import Snacks from './components/Snacks';
import Reviews from './components/Reviews';

class App extends React.Component {
  componentDidMount () {
    this.props.getUser();
  };

  render () {
    return (
      <div>
        <TopNav />
        <BrowserRouter>
          {this.props.user.id ?
            (
              <Switch>
                <Route path="/snacks" component={Snacks} />
                <Route path='/reviews' component={Reviews} />
                <Route path="/" component={() => <Redirect to="/snacks" />} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/" component={() => <Redirect to="/login" />} />
              </Switch>
             )
          }
        </BrowserRouter>
      </div>
    );
  };
};

const mapStateToProps = state => ({user: state.auth.user});

const mapDispatchToProps = dispatch => bindActionCreators({ getUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
