import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

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

    const { alert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => alert(messages.changePasswordSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        alert(messages.changePasswordFailure, 'danger')
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (

      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard  className='card-image'
            style={{
              backgroundImage:
                'url(https://static1.squarespace.com/static/5902bccdebbd1a7690b36562/596fdb18d1758e29a5407271/5a27093f652dea92b0bbdca7/1512507760986/GettyImages-466456685-600x400.jpg?format=1500w)',
              width: '28rem'
            }}>
            <MDBCardBody>

      <form className='auth-form' onSubmit={this.onChangePassword}>
        <h3>Change Password</h3>

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
