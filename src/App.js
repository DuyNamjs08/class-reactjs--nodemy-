import Components from './components/Component';
import logo from './logo.svg';
import User from './components/user';
import Component from './components/Component';
import { useState } from 'react';

function App() {
  const [defaultNumber,setdefaultNumber] =useState(1000)
  return (
    <div className="App">
      <Component defaultNumber={defaultNumber} />
    </div>
  );
}

export default App;
