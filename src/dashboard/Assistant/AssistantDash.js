import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


export class AssistantDash extends Component {
    render() {
        return (
            <MDBCol>
              <br/>
            <MDBCard style={{ width: "12rem", margin: '0 1rem ' }}>
              <MDBCardImage className="img-fluid" src="https://cdn3.iconfinder.com/data/icons/point-of-interest-1/96/taxi-512.png" waves />
              <MDBCardBody>
                <MDBCardTitle>Upcoming Request</MDBCardTitle>
                <MDBCardText>
                 patient info 
                </MDBCardText>
                <MDBBtn color="deep-orange"  href="#">Accept</MDBBtn>
                <MDBBtn color="deep-orange" href="#">Decline</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <br/>
          </MDBCol>
          
        )
    }
}

export default AssistantDash;
