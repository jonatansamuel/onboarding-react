import React, { Component } from 'react'

class Company extends Component{
  render(){
    return(
      <ul>
        <h2>Company Information</h2>
        <li>Company</li>
        <li>tax ID</li>
        <li>role/title</li>
        <li>Website</li>
        <li>Address</li>
        <li>City</li>
        <li>State</li>
        <li>Zip</li>
        <li>Agreements</li>
      </ul>
    )
  }
}

export default Company