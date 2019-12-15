import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import About from './auth/components/About';
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import PatientDash from "./dashboard/Patient/PatientDash"
import NewRequest from "./dashboard/Patient/NewRequest"
import AssistantDash from "./dashboard/Assistant/AssistantDash"
class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      userObj:{},
      alerts: []
    }
  }

  setUser = (user,userObj) => this.setState({user,userObj})

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (

      <React.Fragment>

  
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path="/newreq" component={NewRequest} />
       
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />

<AuthenticatedRoute user={user} path='/patient' render={() => (
          <PatientDash/>
          )} />
          <AuthenticatedRoute user={user} path='/assistant' render={() => (
          <AssistantDash/>
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
