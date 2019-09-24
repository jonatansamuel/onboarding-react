import React, { Component } from 'react'

class Payment extends Component{
  render(){
    return(
      <ul>
        <h2>Payment Method</h2>
        <p>
        <li>Name on Card</li>
        <li>Card Number</li>
        <li>Expire Date</li>
        <li>CVV</li>
        <li>Billing Address</li>
        </p>
      </ul>
    )
  }
}

export default Payment