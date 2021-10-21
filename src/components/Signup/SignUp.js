import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../base.js";
import { Button, Form } from 'semantic-ui-react'
import {Link } from "react-router-dom";


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      
      <Form onSubmit={handleSignUp}>
      <h2>Signup Form</h2>

      <Form.Field>
        <label>Email</label>
        <input name="email" type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
        <label>Password</label>
        <input name="password" type="password" placeholder="Password" />
        </Form.Field>
        <Button type="submit">Sign Up</Button>
      </Form>
      <br/>
      <label style={{marginRight:15}}>Already have a account?</label><Link to="/Login">
              Login Now
            
            </Link>
    </div>
  );
};

export default withRouter(SignUp);
