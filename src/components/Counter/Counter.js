import React from 'react';
// import Controls from './Controls';
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

        <div className="Counter__controls">
          <button type="button" onClick={this.hendleIncrement}>
            Збільшити на 1
          </button>
          <button type="button" onClick={this.hendleDecrement}>
            Зменшити на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
