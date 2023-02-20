import React from 'react';
import Counter from 'components/Counter/Counter';
import Dropdown from 'components/Dropdown/Dropdown';
const App = () => {
  return (
    <>
      <h1>Состояние компонента</h1>
      <Counter initialValue={20} />
      <Dropdown />
    </>
  );
};

export default App;
