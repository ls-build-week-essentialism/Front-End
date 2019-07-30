import React, { useState, useEffect } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const LoginField = (props) => (
  <Form className="login-form">
    <h2 className="login-title">Log In</h2>
    <Form.Field>
      <label>Email</label>
      <input onChange={event => props.handleChange(event)} style={{marginBottom: "20px"}} type="email" className="login-input" placeholder='Email' name="email"/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input onChange={event => props.handleChange(event)} style={{marginBottom: "20px"}} type="password" className="login-input" placeholder='Password' name="password"/>
    </Form.Field>
    <Button onClick={event => props.checkLogin()} type='submit'>Submit</Button>
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
  const [loginInfo, setLoginInfo] = useState({});

  function handleChange(event) {
    const currentLoginInfo = {...loginInfo, [event.target.name]: event.target.value};
    setLoginInfo(currentLoginInfo);
    console.log(loginInfo);
  };

  function checkLogin() {
    axios.post('https://only-essential.herokuapp.com/api/login/')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  };

  return(
    <section className="login-screen-main-container">
      <LoginField checkLogin={checkLogin} handleChange={handleChange}/>
      <SignUpField />
    </section>
  );
}