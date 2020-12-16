import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home/Home';
import Checkout from './components/pages/Checkout/Checkout';
import Itemview from './components/pages/Itemview/Itemview';

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/item" component={Itemview} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
