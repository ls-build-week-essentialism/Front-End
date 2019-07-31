import React, { useState, useEffect } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = (props) => (
  <Form>
    <Form.Group>
      <Form.Input onChange={event => props.handleChange(event)} label='First name' placeholder='First Name' width={6} name="firstName" required/>
      <Form.Input onChange={event => props.handleChange(event)} label='Last Name' placeholder='Last Name' width={6} name="lastName" required/>
    </Form.Group>
    <Form.Field>
      <Form.Input onChange={event => props.handleChange(event)} label='Email' width={7} placeholder='Email' name="email" type="email" required/>
    </Form.Field>
    <Form.Field>
      <Form.Input onChange={event => props.handleChange(event)} label='Password'width={7} placeholder='Desired Password' name="password" required/>
    </Form.Field>
    <Form.Field>
    <Checkbox label='I agree to the Terms and Conditions'/>
    <Button onClick={event => props.handleSubmit(event)} to="/valueSelectorForm" as={Link} type='submit'>Submit</Button>
    </Form.Field> 
  </Form>
)

function SignUpScreen() {
  const [user, setUser] = useState({});

  function handleChange(event) {
    const newUser = {...user, [event.target.name]: event.target.value}
    setUser(newUser)
    console.log(user);
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://only-essential.herokuapp.com/api/register/', user)
      .then(res => {
        console.log(user);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <section className="sign-up-form-container">
      <SignUpForm handleSubmit={handleSubmit} handleChange={handleChange} />
    </section>
  );
}

export default SignUpScreen;