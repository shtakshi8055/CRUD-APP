import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState ('');
  const [psw, setPsw] = useState('');
  const [progress, setProgress] = useState(0);
  const [id, setID] = useState(null);

  let history = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setEmail(localStorage.getItem('Email'));
    setPsw(localStorage.getItem('Psw'));
  }, []);

  const updateData = () => {
    axios.put(`https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData/${id}`, {
      email, psw  
    })
    .then(() => {
      
    })
  }

  const handleButtonClick = () => {

    setProgress(100); 
    updateData();  
     history('/LoginPage')

  }

  return (
    <div>
      <h1>Login</h1>
      <Form className="create-form">
        <Form.Field>
        <label>Email</label>
        <input className='style' type='email' placeholder='Email' value = {email} onChange={(e) => setEmail(e.target.value)}  />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input className='style' type='password' placeholder='Password' value = {psw} onChange={(e) => setPsw(e.target.value)}/>
        </Form.Field>
        <Button type='submit' onClick={handleButtonClick}>Login</Button>
      </Form>
    </div>
  );
};

export default Login;