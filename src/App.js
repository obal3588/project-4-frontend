import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import Home from './Home/Home';
import Footer from './Home/Footer';
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

import PatientDash from "./dashboard/Patient/PatientDash"
import MyRequests from "./dashboard/Patient/myrequests/MyRequests"
import NewRequest from "./dashboard/Patient/NewRequest"
import AssistantDash from "./dashboard/Assistant/AssistantDash"
import ReqHistory from "./dashboard/Assistant/ReqHistory"
import Team from "./Home/Team"
import UpdateRequest from "./dashboard/Patient/myrequests/UpdateRequest"


class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      assistantId: null,
      userObj: {},
 
    };
  }



  setUser = (user, userObj) => this.setState({ user, userObj });
  setAssistantId = assistantId => this.setState({ assistantId });
  clearUser = () => this.setState({ user: null });



  render() {
    const { user, userObj } = this.state;

    return (
    
      <React.Fragment>
        <Header user={user} />
       
        <main className="container">
       
          <Route
            path="/sign-up"
            render={() => <SignUp    setUser={this.setUser} />}
          />

          <Route
            path="/sign-in"
            render={() => <SignIn    setUser={this.setUser} />}
          />
          <AuthenticatedRoute
            user={user}
            path="/sign-out"
            render={() => (
              <SignOut
                  
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path="/change-password"
            render={() => <ChangePassword    user={user} />}
          />

          <Route
            user={user}
            exact path={`/Patient/:token`}
            render={() => <PatientDash user={userObj} setAssistantId={this.setAssistantId}/>}
          />
           <Route
            user={user}
            exact path={`/Patient/:token/myrequests`}
            render={() => 
      
            <MyRequests user={userObj} />
         
            }
          />
          <Route path="/team" component={Team} />
          {/* <Route path="/SideNav" component={SideNav} /> */}
          {/* <Route path="/NavbarPage" component={NavbarPage} /> */}
          <Route exact path="/" component={Home} />
         
     <AuthenticatedRoute
            user={user}
            exact path={`/Patient/:token/myrequests/update/:id`}
            render={() => 
            
                 <UpdateRequest user={userObj} />
                  
          }
          />
          

          <AuthenticatedRoute
            user={user}
            exact path={`/Patient/:token/newrequest`}
            render={() => <NewRequest user={userObj} assistantId={this.state.assistantId}  />}
          />
          <AuthenticatedRoute
            user={user}
            assistant          exact path="/assistant"
            render={() => <AssistantDash user={userObj} />}
          />
              <AuthenticatedRoute
            user={user}
            exact path="/assistant/history"
            render={() => <ReqHistory user={userObj} />}
          />
           
        </main>
        <Footer />
      </React.Fragment>
   
    );
  }
}

export default App;
