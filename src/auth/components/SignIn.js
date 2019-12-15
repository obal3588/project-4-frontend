import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../api'
import messages from '../messages'

<<<<<<< HEAD
=======
import {ispatient ,patient,assistant} from "../helpMethods.js"
>>>>>>> 17cbdbbf89ccdd09f3c2bc4c437b9f2bbb3a9b40

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
      <form className='auth-form' onSubmit={this.onSignIn}>
        <h3>Sign In</h3>
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          value={email}
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
        <button type="submit">Sign In</button>
      </form>
    )
  }
}

export default withRouter(SignIn)
