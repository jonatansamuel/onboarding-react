import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Components/App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'
import Welcome from './Components/Welcome'
import Product from './Components/Product'
import Cart from './Components/Cart'
import Signup from './Components/Signup'
import Validatorpractice from './Components/Validatorpractice'
import OrderConfirm from './Components/OrderConfirm'

class App extends Component {
  render() {
    return (
      <div>
            <Header />
            <Router>
                <Switch>
                <Route exact path="/" component= { Homepage }/>
                    <Route exact path="/Welcome" component= { Welcome }/>
                    <Route exact path="/Product" component= { Product }/>
                    <Route exact path="/Cart" component= { Cart }/>
                    <Route exact path="/Signup" component= { Signup }/>
                    <Route exact path="/OrderConfirm" component= { OrderConfirm }/>
                    <Route exact path="/Validatorpractice" component= { Validatorpractice }/>
                </Switch>
            </Router>
            <Footer />
      </div>
    );
  }
}

export default App;
