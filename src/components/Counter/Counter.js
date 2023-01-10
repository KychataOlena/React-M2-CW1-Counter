import React from 'react';
import Controls from './Controls';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  hendleIncrement = () => {
    // this.setState({
    //   value: 15,
    // });

    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  hendleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <Controls
          onIncrement={this.hendleIncrement}
          onDecrement={this.hendleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
