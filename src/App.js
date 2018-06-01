import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from './actions/auth';

import TopNav from './components/TopNav';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Snacks from './components/Snacks';
import Reviews from './components/Reviews';
import SubmitReview from './components/SubmitReview';
import Unauthorized from './components/Unauthorized';
import Welcome from './components/Welcome';
import Home from './components/Home';

class App extends React.Component {
  componentDidMount () {
    this.props.getUser();
  };

  render () {
    return (
      <div>
        <TopNav />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/snacks" component={Snacks} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/reviewForm" component={SubmitReview} />
            <Route path="/unauthorized" component={Unauthorized} />
            <Route path="/welcome" component={Welcome} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({ getUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
