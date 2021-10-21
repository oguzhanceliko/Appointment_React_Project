import React, { useState, useEffect } from 'react';
import { Button,Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import 'react-datepicker/dist/react-datepicker.css'

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://616eb041715a630017b39793.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
            email,
            startDate
        }).then(() => {
            history.push('/')
        })
    }
    return (
        <div>
            <h1>Update  Form</h1>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Email</label>
                    <input placeholder='Email'  type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                
                <Form.Field>
                    <label>Date</label>
                    <input placeholder='Date' dateFormat="dd-MM-yyyy"  type="date"  onChange={(e) => setStartDate(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}