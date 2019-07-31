import React, { useState, useEffect } from 'react';
import { Button, Form, Icon, FeedUser } from 'semantic-ui-react';
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
    <Button as={Link} to="/userDashboard" onClick={event => props.checkLogin(event)} type='submit'>Submit</Button>
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
  const [isLoginValid, setLoginValid] = useState(false);

  function handleChange(event) {
    const currentLoginInfo = {...loginInfo, [event.target.name]: event.target.value};
    setLoginInfo(currentLoginInfo);
    console.log(loginInfo);
  };

  function checkLogin(event) {
    event.preventDefault();
    
    axios.post('https://only-essential.herokuapp.com/api/login/', loginInfo)
    .then(res => {
      console.log(loginInfo);
      console.log(res.statusText);
      if(res.statusText !== "OK") event.preventDefault();
      else if (res.statusText === "OK") { 
        setLoginValid(true);
        console.log(isLoginValid); 
        return true;
      }
    })
    .catch(err => {
      console.log(err);
      console.log(isLoginValid);
    })
  };

  return(
    <section className="login-screen-main-container">
      <LoginField checkLogin={checkLogin} handleChange={handleChange}/>
      <SignUpField />
    </section>
  );
}