import React from 'react';
import Counter from 'components/Counter/Counter';
const App = () => {
  return (
    <>
      <h1>Состояние компонента</h1>
      <Counter initialValue={20} />
    </>
  );
};

export default App;
