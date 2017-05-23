import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement, incrementByCount }  from './action'

class Counter extends Component {
    render () {
      return (
          <div>
              <div>{this.props.count}</div>
              <button onClick={this.props.increment}>INCREMENT</button>
              <button onClick={this.props.decrement}>DECREMENT</button>
              <button onClick={this.props.incrementByFive}>DECREMENT</button>
          </div>
      )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByFive: () => dispatch(incrementByCount(5)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
