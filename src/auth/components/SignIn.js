import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

import { signIn } from '../api'
import messages from '../messages'

import {ispatient ,patient,assistant} from "../helpMethods.js"

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    let url="";
   
    signIn(this.state)
     .then(res =>{
       const temp=res.data.user.role.localeCompare("Assistant");
       if (temp === 0){
        console.log("ass")
        url ="/assistant";
        return setUser(res.data.user.name,assistant(res))
       }
        else
        {
        console.log ("p")
        url ="/patient";
       return  setUser(res.data.user.name,patient(res))
        }
        
      } )
      .then(() => alert(messages.signInSuccess, 'success'))
      .then((res) => history.push(url))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state
   

    return (

      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard  className='card-image'
            style={{
              backgroundImage:
                'url(https://www.manchesterspecialty.com/wp-content/uploads/2019/07/Protecting-Non-Emergency-Medical-Transportation-Drivers-While-On-the-Job-e1558732784308.jpg)',
              width: '28rem'
            }}>
            <MDBCardBody>
      
      <form className='auth-form' onSubmit={this.onSignIn}>
        <h3>Sign In</h3>

        <label htmlFor="email">Email</label>
        <MDBInput
          required
          icon="envelope"
          type="email"
          name="email"
          value={email}
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
         <div className="text-center">
         <MDBBtn type="submit">Sign In</MDBBtn>
         </div>
      </form>
      </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  }
}

export default withRouter(SignIn)
