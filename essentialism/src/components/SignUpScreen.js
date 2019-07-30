import React from 'react';
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignUpForm = () => (
  <Form>
    <Form.Group>
      <Form.Input label='First name' placeholder='First Name' width={6} />
      <Form.Input label='Last Name' placeholder='Last Name' width={6} />
    </Form.Group>
    <Form.Field>
      <label>Email</label>
      <Form.Input width={7} placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Desired Password</label>
      <Form.Input width={7} placeholder='Desired Password' />
    </Form.Field>
    <Form.Field>
    <Checkbox label='I agree to the Terms and Conditions' />
    <Button to="/valueSelectorForm" as={Link} type='submit'>Submit</Button>
    </Form.Field>
  </Form>
)

function SignUpScreen() {
  

  return (
    <section className="sign-up-form-container">
      <SignUpForm />
    </section>
  );
}

export default SignUpScreen;