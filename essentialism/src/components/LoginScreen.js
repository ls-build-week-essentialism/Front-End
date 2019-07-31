import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const LoginField = () => (
  <Form className="login-form">
    <h2 className="login-title">Log In</h2>
    <Form.Field>
      <label>Email</label>
      <input style={{marginBottom: "20px"}} className="login-input" placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input style={{marginBottom: "20px"}} className="login-input" placeholder='Password' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
);

const SignUpField = () => (
  <div className="sign-up-container">
    <h3>New User?</h3>
    <Icon name='user'></Icon>
    <Link to="/signupForm">Sign Up</Link>
  </div>
);

export default function LoginScreen() {

  useEffect(() => {
    axios.post("https://only-essential.herokuapp.com/api/register")
    .then(res => {
      console.log(res);
    })
  })

  return(
    <section className="login-screen-main-container">
      <LoginField />
      <SignUpField />
    </section>
  );
}