import React, { useState } from 'react';
import Controls from './Controls';
import './Counter.css';

export default function Counter() {
  const [value, setValue] = useState(0);

  const hendleIncrement = () => {
    setValue(prevState => prevState + 1);
  };

  const hendleDecrement = () => {
    setValue(prevState => prevState - 1);
  };
  return (
    <div className="Counter">
      <span className="Counter__value">{value}</span>
      <Controls onIncrement={hendleIncrement} onDecrement={hendleDecrement} />
    </div>
  );
}

// class OldCounter extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   hendleIncrement = () => {
//     // this.setState({
//     //   value: 15,
//     // });

//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   hendleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };
//   render() {}
// }

// export  Counter;
