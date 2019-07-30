import React, { useState, useEffect } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const SignUpForm = (props) => (
  <Form>
    <Form.Group>
      <Form.Input onChange={event => props.handleChange(event)} label='First name' placeholder='First Name' width={6} name="firstName"/>
      <Form.Input onChange={event => props.handleChange(event)} label='Last Name' placeholder='Last Name' width={6} name="lastName"/>
    </Form.Group>
    <Form.Field>
      <label>Email</label>
      <Form.Input onChange={event => props.handleChange(event)} width={7} placeholder='Email' name="email" type="email"/>
    </Form.Field>
    <Form.Field>
      <label>Desired Password</label>
      <Form.Input onChange={event => props.handleChange(event)} width={7} placeholder='Desired Password' name="password"/>
    </Form.Field>
    <Form.Field>
    <Checkbox label='I agree to the Terms and Conditions' />
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
  function handleSubmit() {
    console.log(user);
  }

  // useEffect(() => {
  //   Axios.post("https://only-essential.herokuapp.com")
  //     .then(res => {
  //       console.log(res)
  //     })
  // })

  return (
    <section className="sign-up-form-container">
      <SignUpForm handleSubmit={handleSubmit} handleChange={handleChange} />
    </section>
  );
}

export default SignUpScreen;