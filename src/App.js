import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name: '', email: '', role: ''});

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({name: '', email: '', role: ''})
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value})
  }

  return (
    <div className="app">
      <Form 
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {members.map((member, idx) => {
        return (
          <div id={idx} className='list'>
            Name: {member.name}, Email: {member.email}, Role: {member.role}, <button>Edit</button>
            
          </div>
        )
      })}
    </div>
  );
}

export default App;
