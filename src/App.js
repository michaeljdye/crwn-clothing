import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import Auth from './pages/auth/auth';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign-in" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
