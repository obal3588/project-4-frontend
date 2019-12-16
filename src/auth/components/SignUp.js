import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
import { signUp, signIn } from "../api";
import messages from "../messages";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';


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

      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard  className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
              width: '28rem'
            }}>
            <MDBCardBody>

      <form className="auth-form" onSubmit={this.onSignUp}>
        <h3>Sign Up</h3>
        <label htmlFor="name">Name</label>
        <MDBInput
          required
          icon="user"
          name="name"
          value={name}
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
        />

        <label htmlFor="age">Age</label>
        <MDBInput
          required
          name="age"
          value={age}
          type="Number"
          placeholder="age"
          onChange={this.handleChange}
        />

        <label htmlFor="Phone Number">Phone Number</label>
        <MDBInput
          required
          name="phone"
          value={phone}
          type="tel"
          placeholder="phone number"
          onChange={this.handleChange}
         
          
        />

        <label htmlFor="email">Email</label>
        <MDBInput
          required
          icon="envelope"
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <MDBInput
          required
          icon="lock"
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <MDBInput
          required
          icon="exclamation-triangle"
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

        <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
      </form>
      </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default withRouter(SignUp);
