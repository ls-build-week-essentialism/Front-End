import React, { useState } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const LoginField = props => (
  <Form className="login-form">
    <h2 className="login-title">Log In</h2>
    <Form.Field>
      <label>Email</label>
      <input
        onChange={event => props.handleChange(event)}
        style={{ marginBottom: "20px" }}
        type="email"
        className="login-input"
        placeholder="Email"
        name="email"
      />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input
        onChange={event => props.handleChange(event)}
        style={{ marginBottom: "20px" }}
        type="password"
        className="login-input"
        placeholder="Password"
        name="password"
      />
    </Form.Field>
    <Button
      as={Link}
      to="/userDashboard"
      onClick={event => props.checkLogin(event)}
      type="submit"
    >
      Submit
    </Button>
  </Form>
);

const SignUpField = props => (
  <div className="sign-up-container">
    <h3>New User?</h3>
    <Icon name="user" />
    <Link to="/signupForm">Sign Up</Link>
  </div>
);

export default function LoginScreen(props) {
  const [loginInfo, setLoginInfo] = useState({});
  const [isLoginValid, setLoginValid] = useState(false);
  const [userId, setUserId] = useState(0);

  function handleChange(event) {
    const currentLoginInfo = {
      ...loginInfo,
      [event.target.name]: event.target.value
    };
    setLoginInfo(currentLoginInfo);
    console.log(loginInfo);
  }

  function checkLogin(event) {
    event.preventDefault();

    axios
      .post("https://only-essential.herokuapp.com/api/login/", loginInfo)
      .then(res => {
        if (res.statusText === "OK") {
          setUserId(res.data.id);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
          setLoginValid(true);
          console.log(res);
        } else if (res.statusText !== "OK") {
          alert("Invalid Username or Password");
        }
      })
      .catch(err => {
        console.log(err);
        console.log(isLoginValid);
      });
  }

  if (isLoginValid === true)
    return (
      <Redirect
        to={{ pathname: "/userDashboard", state: { id: `${userId}` } }}
      />
    );

  return (
    <section className="login-screen-main-container">
      <LoginField checkLogin={checkLogin} handleChange={handleChange} />
      <SignUpField />
    </section>
  );
}
