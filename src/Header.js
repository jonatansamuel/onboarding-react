import React, { Component } from 'react'
import mklogo from './images/mklogo.png';

class Header extends Component{
  render(){
    return(
      <header>
         <img src = { mklogo } />
        <h1>MK Decision</h1>
      </header>
    )
  }
}

export default Header;