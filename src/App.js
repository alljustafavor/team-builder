import './App.css';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [team, setTeam] = useState()

  return (
    <div className="app">
      <Form />
    </div>
  );
}

export default App;
