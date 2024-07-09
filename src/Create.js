import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(false);
  const [psw, setPsw] = useState('');
  const [progress, setProgress] = useState(0);

  let history = useNavigate();

  const postData = () => {
    axios.post('https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData', {
      firstName,
      lastName,
      email,
      psw,
    }).then(() => {
      history('/Read');
    })
  }

  const handleButtonClick = () => {
    if (!email) {
      return;
    }
    postData();
    setProgress(100); 
  }
  return (
    <div>
      <h1>Register!!</h1>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input style={{textTransform: "capitalize"}}
            placeholder='First Name' type='text'
            onChange={(e) => setFirstName(e.target.value)}
          />

        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input style={{textTransform: "capitalize"}}
            placeholder='Last Name' type='text'
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
        <label>Email</label>
          <input
            placeholder='Email' type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
        <label>Set-Password</label>
          <input
            placeholder='password' type='password'
            onChange={(e) => setPsw(e.target.value)}
          />
        </Form.Field>
        <Button type='submit' onClick={handleButtonClick} disabled={!email}>
          Submit
        </Button>
      </Form>
    </div>
  )
}
export default Create;