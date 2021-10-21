import React,{useState} from 'react'
import { Button,Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import 'react-datepicker/dist/react-datepicker.css'


export default function Create() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState('');
    const postData = () => {
        axios.post(`https://616eb041715a630017b39793.mockapi.io/fakeData/`, {
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
            <h1>Create  Form</h1>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' type="email" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <input placeholder='Date' dateFormat="dd-MM-yyyy"  type="date"   onChange={(e) => setStartDate(e.target.value)}/>
                </Form.Field>
                
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}