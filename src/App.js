import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import Header from './Header'
import Footer from './Footer'
import Personal from './Personal'
import Company from './Company'
import Payment from './Payment'
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/personal" component= { Personal }/>
                    <Route exact path="/Company" component= { Company }/>
                    <Route exact path="/Payment" component= { Payment }/>
                </Switch>
            </Router>
            <Footer />

      </div>
    );
  }
}

export default App;
