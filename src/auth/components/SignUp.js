import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
import { signUp, signIn } from "../api";
import messages from "../messages";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: "",
      email: "",
      phone: "",
      type:"Patient",
      password: "",
      passwordConfirmation: ""
    };
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onSignUp = event => {
    event.preventDefault();

    const { alert, history, setUser } = this.props;

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user.name)
      )
      .then(() => alert(messages.signUpSuccess, "success"))
      .then(() => history.push("/"))
      .catch(error => {
        console.error(error);
        this.setState({ email: "", password: "", passwordConfirmation: "" });
        alert(messages.signUpFailure, "danger");
      });
  };

  render() {
    const {
      email,
      password,
      passwordConfirmation,
      age,
      name,
      phone,
      type
    } = this.state;

    return (
      <form className="auth-form" onSubmit={this.onSignUp}>
        <h3>Sign Up</h3>
        <label htmlFor="name">Name</label>
        <input
          required
          name="name"
          value={name}
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
        />

        <label htmlFor="age">Age</label>
        <input
          required
          name="age"
          value={age}
          type="Number"
          placeholder="age"
          onChange={this.handleChange}
        />

        <label htmlFor="Phone Number">Phone Number</label>
        <input
          required
          name="phone"
          value={phone}
          type="tel"
          placeholder="phone number"
          onChange={this.handleChange}
         
          
        />

        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />

        <Form.Label>I am  ?</Form.Label>
        <Form.Control as="select"
        required
              
               name="type"
               value={type}
               onChange={this.handleChange}
               
        >
          <option > Patient</option>
          <option>Assistant</option>
        </Form.Control>

        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default withRouter(SignUp);
