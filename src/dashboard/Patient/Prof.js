import React, { Component } from 'react'
import { ThemeContext } from "../../ThemeContext/ThemeContext";
export class Prof extends Component {
    onSubmit= event =>{}
    static contextType = ThemeContext;
    render() {
        const{userObj}=this.context
        return (
            <MDBContainer id={"main"}>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="card-image">
                  <MDBCardBody>
                    <form className="auth-form" onSubmit={this.onSubmit}>
                      <h3 className="white-text text-center mb-5 mt-4 font-weight-bold">
                        <strong>Profile</strong>
                      </h3>
                      <label htmlFor="name">Name</label>
                      <MDBInput
                        required
                        icon="user"
                        name="name"
                       
                        type="text"
                        placeholder={userObj.name}
                        onChange={this.handleChange}
                      />
    
                      <label htmlFor="age">Age</label>
                      <MDBInput
                        required
                        name="age"
                        value={age}
                        type="Number"
                        placeholder={userObj.age}
                        onChange={this.handleChange}
                      />
    
                      <label htmlFor="Phone Number">Phone Number</label>
                      <MDBInput
                        required
                        name="phone"
                        value={phone}
                        type="tel"
                        placeholder={userObj.phone}
                        onChange={this.handleChange}
                      />
    
                      <label htmlFor="text">healthConditions</label>
                      <MDBInput
                        required
                        icon="envelope"
                        name="healthConditions"
                        value={email}
                       
                        placeholder="healthConditions"
                        onChange={this.handleChange}
                      />
                     
               
               
    
                  
    
              
                  
                
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )
    }
}

export default Prof
