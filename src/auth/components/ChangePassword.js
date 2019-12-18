import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './SignUp.scss';
import { changePassword } from '../api'
import messages from '../messages'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { history, user } = this.props

    changePassword(this.state, user)
     
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })

      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (

      <MDBContainer id={'main'}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard  className='card-image'>
          
            <MDBCardBody>

      <form className='auth-form' onSubmit={this.onChangePassword}>
      <h3 className='white-text text-center mb-5 mt-4 font-weight-bold'>
                  <strong>Sign Up</strong></h3>

        <label htmlFor="oldpw">Old Password</label>
        <MDBInput
          required
          name="oldPassword"
          value={oldPassword}
          type="password"
          placeholder="Old Password"
          onChange={this.handleChange}
        />
        <label htmlFor="newPassword">New Password</label>
        <MDBInput
          required
          name="newPassword"
          value={newPassword}
          type="password"
          placeholder="New Password"
          onChange={this.handleChange}
        />
        <button type="submit">Change Password</button>
      </form>
      </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  }
}

export default withRouter(ChangePassword)
