import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import { user ,updateRequestProcess ,deleteRequest} from "../../auth/api";

export class Patient extends Component {
  constructor() {
    super();

    this.state = {
    req:{},
      p: ""
    };
  }

  componentDidMount() {
    console.log(this.props);
    user(this.props.patient)
      .then(e => {
        console.log(e, "p");
        this.setState({ p: e.data.user 
                        ,req :this.props.patient});
      })
      .catch(e => console.log(e));
  }

  handleAccept=(e)=>{
    e.preventDefault()
    const t = this.state.req;
    t.requestStatus = "accepted";
    this.setState({req : t}, () => {
        updateRequestProcess(this.props.patient).then(e=>{

            
        })
    })
   
  }
  handleDone=(e)=>{
    e.preventDefault()
    const t = this.state.req;
    t.completed = true;
    this.setState({req : t}, () => {
        updateRequestProcess(this.props.patient)
    })
   
  }
  handleDecline= e=>{
    e.preventDefault()
    const self=this
    deleteRequest(this.props.patient).then((e)=>{
        self.props.apiCallReq()
    })
  }

  statement=()=>{
    const temp =  this.state.req.requestStatus;

      if (temp === "pending"){

      return (
          <div>
        <MDBBtn onClick={this.handleAccept}>Accept</MDBBtn>
        <MDBBtn onClick={this.handleDecline}>Decline</MDBBtn></div> );
      }
    else {

        return(<MDBBtn onClick={this.handleDone} >Done</MDBBtn>)
    }
  }


  render() {
    if (this.state.req.completed )
      return (<div>
          
      </div>)
      else 
    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage
            className="img-fluid"
            src="https://cdn3.iconfinder.com/data/icons/point-of-interest-1/96/taxi-512.png"
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>Request from {` ${this.state.p.name}`}</MDBCardTitle>
            <MDBCardText>
              <ul>
                <li> patientId:{this.state.req.patientId} </li>
                <li> Pickup:{this.state.req.pickup} </li>
                <li> drop off:{this.state.req.dropoff} </li>
                <li> date:{this.state.req.data} </li>
                <li> specialNeeds:{this.state.req.specialNeeds} </li>
                <li> requestStatus:{this.state.req.requestStatus} </li>
                <li> completed:{this.state.req.completed} </li>
                <li> phone:{this.state.p.phone} </li>
              </ul>
            </MDBCardText>
           
        {this.statement()}
       
      
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default Patient;
