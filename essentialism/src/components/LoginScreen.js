import React from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';


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
    <a href="###">Sign Up</a>
  </div>
);

export default function LoginScreen() {

  return(
    <section className="login-screen-main-container">
      <LoginField />
      <SignUpField />
    </section>
  );
}