import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../base.js";
import { AuthContext } from "../../Auth.js";
import { Button, Form } from 'semantic-ui-react'
import {Link } from "react-router-dom";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <h2>Login Form</h2>
        <Form.Field>
        <label>Email</label>
        <input name="email" type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
        <label>Password</label>
        <input name="password" type="password" placeholder="Password" />
        </Form.Field>
        <Button type='submit'>Login</Button>

        </Form>
        <br/>
        <label style={{marginRight:15}}>Not a member ? </label><Link to="/SignUp">
              Signup Now
            
            </Link>
    </div>
  );
};

export default withRouter(Login);
