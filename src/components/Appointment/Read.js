import React,{useEffect,useState} from "react";
import app from "../../base.js";
import axios from 'axios';

import { Table, Button ,Form} from 'semantic-ui-react';
import { Link ,useHistory} from 'react-router-dom';

export default function Read () {
  const [APIData, setAPIData] = useState([]);
    let history = useHistory();
    const handleHistory = () => {
        history.push('/create');
        };
    useEffect(() => {
        axios.get(`https://616eb041715a630017b39793.mockapi.io/fakeData`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);
    const setData = (data) => {
      let { id, firstName, lastName, email ,startDate} = data;
      localStorage.setItem('ID', id);
      localStorage.setItem('First Name', firstName);
      localStorage.setItem('Last Name', lastName);
      localStorage.setItem('Email', email)
      localStorage.setItem('Start Date', startDate)
  }

  const getData = () => {
      axios.get(`https://616eb041715a630017b39793.mockapi.io/fakeData`)
          .then((getData) => {
               setAPIData(getData.data);
           })
  }

  const onDelete = (id) => {
      axios.delete(`https://616eb041715a630017b39793.mockapi.io/fakeData/${id}`)
   .then(() => {
      getData();
  })
}
    
  return (
    <div>
        <br/>
    <Button color='red' onClick={() => app.auth().signOut()}>Sign out</Button>
      <h1>Appointment Table Form</h1>
      

      <Form className="create-form">
                <Form.Field>
                    
                    
                </Form.Field>
            </Form>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.startDate}</Table.Cell>
                                
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button basic color='green' onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button basic color='red' onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                    
                </Table.Body>
                
               
            </Table>
            <Button basic color='blue' onClick={handleHistory}>Add New</Button>
    </div>
  );
};


