import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Components/App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'
import Personal from './Components/Personal'
import Company from './Components/Company'
import Pay from './Components/Pay'
import Welcome from './Components/Welcome'
import Product from './Components/Product'
import Cart from './Components/Cart'
import Newpractice from './Components/Newpractice'

class App extends Component {
  render() {
    return (
      <div>
            <Header />
            <Router>
                <Switch>
                <Route exact path="/" component= { Homepage }/>
                    <Route exact path="/personal" component= { Personal }/>
                    <Route exact path="/Company" component= { Company }/>
                    <Route exact path="/Pay" component= { Pay }/>
                    <Route exact path="/Welcome" component= { Welcome }/>
                    <Route exact path="/Product" component= { Product }/>
                    <Route exact path="/Cart" component= { Cart }/>
                    <Route exact path="/Newpractice" component= { Newpractice }/>
                </Switch>
            </Router>
            <Footer />
      </div>
    );
  }
}

export default App;
