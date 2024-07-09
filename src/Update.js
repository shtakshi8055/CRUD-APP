import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState ('');
  const [psw, setPsw] = useState('');
  const [progress, setProgress] = useState(0);
  const [id, setID] = useState(null);
  let history = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setEmail(localStorage.getItem('Email'))
    setEmail(localStorage.getItem('Psw'))
  }, []);

  const updateAPIData = () => {
    axios.put(`https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData/${id}`, {
      firstName,
      lastName,
      email,
      psw,
      
    }).then(() => {
      history('/read')
    })
  }

  const handleButtonClick = () => {
    if(!email){
      return;
    }
    setProgress(100); 
    updateAPIData();  
  }
  
  return (
    <div>
      <h1>Update Here</h1>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input className='style' type='text' style={{textTransform: "capitalize"}} placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input className='style' type='text' style={{textTransform: "capitalize"}}  placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
        <label>Email</label>
        <input className='style' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Field>
        <Form.Field>
        <label>Password</label>
        <input className='style' type='password' placeholder='Password' value={psw} onChange={(e) => setPsw(e.target.value)}/>
        </Form.Field>
        <Button type='submit' onClick={handleButtonClick} disabled={!email}>Update</Button>
      </Form>
    </div>
  )
}

export default Update;