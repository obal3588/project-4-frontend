import React, { Component } from 'react'
import { MDBMedia, MDBIcon ,MDBBtn } from 'mdbreact';

export class PatientDash extends Component {
    render() {

        
        return (
          
                <MDBMedia list className="mt-3">
                  <MDBMedia tag="li">
                    <MDBMedia left href="#">
                      <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="Generic placeholder image" />
                    </MDBMedia>
                    <MDBMedia body>
                      <MDBMedia heading>
                      Assistant 1
                        </MDBMedia>
                      <MDBIcon icon="star" className="blue-text" />
                      <MDBIcon icon="star" className="blue-text" />
                      <MDBIcon icon="star" className="blue-text" />
                      <MDBIcon icon="star" className="blue-text" />
                      <MDBIcon icon="star" className="grey-text" />
                      <p>Assistant info</p>
                    </MDBMedia>
                  </MDBMedia>
                  <MDBMedia tag="li">
                    <MDBMedia left href="#">
                      <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg" alt="Generic placeholder image" />
                    </MDBMedia>
                    <MDBMedia body>
                      <MDBMedia heading>
                       Assistant 2
                        </MDBMedia>
                      <MDBIcon icon="star" className="blue-text" />
                      <MDBIcon icon="star" className="blue-text" />
                      <MDBIcon icon="star" className="blue-text" />
                      <MDBIcon icon="star" className="grey-text" />
                      <MDBIcon icon="star" className="grey-text" />
                      <p>Assistant info</p>
                    </MDBMedia>
                  </MDBMedia>
                  <MDBMedia tag="li">
                    <MDBMedia left href="#">
                      <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="Generic placeholder image" />
                    </MDBMedia>
                    
             
                    <MDBMedia body>
                      <MDBMedia heading>
                      Assistant 3
                        </MDBMedia>
                      <MDBIcon icon="star" className="blue-text" />
                      <MDBIcon icon="star" className="blue-text" />
                      <MDBIcon icon="star" className="blue-text" />
                      <MDBIcon icon="star" className="blue-text" />
                      <MDBIcon icon="star" className="grey-text" />
                      <p>Assistant info</p>
                    </MDBMedia>
                  </MDBMedia>
                </MDBMedia>
           
        )
    }
}

export default PatientDash;
