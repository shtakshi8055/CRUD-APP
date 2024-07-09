import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Read() {
  const [APIData, setAPIData] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    axios.get('https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData')
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

  const setData = (data) => {
    let { id, firstName, lastName, email,psw } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', psw);
   
  }

  const onDelete = (id) => {
    axios.delete(`https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData/${id}`)
    .then(() => {
      getData();
    })
  }

  const getData = () => {
    axios.get(`https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }

  const AddMore = () =>{
    history('/Create');
  }

  const LoginPage = () =>{
    history('/Login');
  } 
  return (
    <div>
      <h1>User Details</h1>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Login</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell style={{textTransform: "capitalize"}}>{data.firstName}</Table.Cell>
                <Table.Cell style={{textTransform: "capitalize"}}>{data.lastName}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Link to='/update'>
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
                <Link to= '/Login'>
                <Table.Cell>
                  <Button onClick={LoginPage}>Login</Button>
                </Table.Cell>
                </Link>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>

        <Button onClick={AddMore}>Add</Button>

    </div>
  )
}

export default Read;