import React, { Component } from 'react' 
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";


class Team extends Component {
  render() {
    return (
        <React.Fragment>
    <MDBCard className="my-5 px-1 pb-5 text-center">
        <MDBCardBody>

          <h2 className="h1-responsive font-weight-bold my-5">
            Our Amazing Team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
          A Passionate Team who have a can-do attitude backed up by talents.
          Aims to deliver high-end, 
          creative solutions on time and on budget.
          </p>
          <MDBRow>
            <MDBCol md="4" className="mb-md-0 mb-5">
              
              <h4 className="font-weight-bold dark-grey-text my-4">
              Obaid Alqahtani 
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Software Engineer|Full-stack</h6>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn tag="a" href="https://github.com/obal3588"
              floating size="sm" className="mx-1 mb-0 btn-git">
                <MDBIcon fab icon="github" />
              </MDBBtn>

              <MDBBtn tag="a" href="https://www.linkedin.com/in/obaid-fpga/"
              floating size="sm" className="mx-1 mb-0 btn-li">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
             
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
             
              <h4 className="font-weight-bold dark-grey-text my-4"> Hisham Aljahbli</h4>
              <h6 className="text-uppercase grey-text mb-3">
              Software Engineer|Full-stack
              </h6>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn tag="a" href="https://github.com/hamjahb"
              floating size="sm" className="mx-1 mb-0 btn-git">
                <MDBIcon fab icon="github" />
              </MDBBtn>

              <MDBBtn tag="a" href="https://www.linkedin.com/in/haljahbli-softwareeng/"
              floating size="sm" className="mx-1 mb-0 btn-li">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
             
            </MDBCol>
            

            <MDBCol md="4" className="mb-md-0 mb-5">
       
              <h4 className="font-weight-bold dark-grey-text my-4">
                Sarah Alghofaili
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Web Designer|Full-stack</h6>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn tag="a" href="https://github.com/saera1988"
              floating size="sm" className="mx-1 mb-0 btn-git">
                <MDBIcon fab icon="github" />
              </MDBBtn>

              <MDBBtn tag="a" href="https://www.linkedin.com/in/sarah-alghofaili-87a268143/"
floating size="sm" className="mx-1 mb-0 btn-li">
                <MDBIcon fab icon="linkedin-in" />

              </MDBBtn>
             
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
 </React.Fragment>
 );
}
}

export default Team;


