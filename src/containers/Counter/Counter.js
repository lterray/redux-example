import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { increment, decrement, add, substract } from '../../store/actions/index';


class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counterPlus + this.props.counterMinus} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubstractCounter(5)}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counterPlus: state.reducerAdd.counter,
        counterMinus: state.reducerSubstract.counter
    }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: (value) => dispatch(add({value: value})),
    onSubstractCounter: (value) => dispatch(substract({value: value}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);