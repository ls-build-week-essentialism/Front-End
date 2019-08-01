import React, { useState } from 'react';
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
      <Form.Input onChange={event => props.handleChange(event)} label='Password'width={7} placeholder='Desired Password' name="password" type="password" required/>
    </Form.Field>
    <Form.Field>
    <Checkbox label='I agree to the Terms and Conditions'/>
    <Button onClick={event => props.handleSubmit(event)} to="/value" as={Link} type='submit'>Submit</Button>
    </Form.Field> 
  </Form>
);

function SignUpScreen() {
  const [formIsValid, setFormIsValid] = useState(false);
  const [user, setUser] = useState({});
  const errors = [];

  function validateForm(errors) {
    // if (user.firstName.length > 0 && user.lastName.length > 0) {setFormIsValid(true)}
    console.log(errors);
  }

  function handleChange(event) {
    const newUser = {...user, [event.target.name]: event.target.value}
    setUser(newUser);
    console.log(user);
  }
  function handleSubmit(event) {
    validateForm(errors);
    setFormIsValid(true);
    console.log(formIsValid);
    
    
    axios.post('https://only-essential.herokuapp.com/api/register/', user)
      .then(res => {
        console.log(user);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    if(formIsValid === true) return true;
  }

  return (
    <section className="sign-up-form-container">
      <SignUpForm formIsValid={formIsValid} handleSubmit={handleSubmit} handleChange={handleChange} />
    </section>
  );
}

export default SignUpScreen;