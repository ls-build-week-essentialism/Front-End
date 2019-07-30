import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';


const LoginForm = () => (
  <Form className="login-form">
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
);

function LoginScreen() {

  return(
    <section className="login-container">
      <LoginForm /> 
      <LoginForm />
    </section>
  );
}

export default LoginScreen;