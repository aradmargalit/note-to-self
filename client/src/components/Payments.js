import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 gets you 5 emails credits!"
        amount={5 * 100} // 5 dollar
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Pay with Card</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
