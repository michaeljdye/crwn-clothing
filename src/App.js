import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import AuthPage from './pages/auth/auth';
import { auth } from './firebase/firebase-utils';

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    // Subscribe to auth state changes
    this.unsubscribeFromAuth = auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    console.log(currentUser);

    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
