import React, { Component } from 'react'
import{Form ,Col ,Button} from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import { newRequest } from "../../auth/api";
import { withRouter } from "react-router-dom";
export class NewRequest extends Component {
  constructor() {
    super();
 
    this.state = {
      assistantId:"",
      date: new Date(),
      pickup: "",
      dropoff:"",
      carDescription:"",
      healthConditions:"",
      specialNeeds:"",
      package:Boolean,
      token:""
    };
  }
  componentDidMount() {
    this.setState({
      token:this.props.user.token,
      assistantId:this.props.assistantId
    })
  }

  handleChange = event =>
  this.setState({
    [event.target.name]: event.target.value
  });



  newReq= event => {
 
    event.preventDefault();
    newRequest(this.state)
   
  };
  onChange = date => this.setState({ date })

  
    render() {
      console.log(this.props,"check")
        return (
            <Form onSubmit={this.newReq}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGrid1">
                <Form.Label>Pick up</Form.Label>
                <Form.Control type="text" name="pickup" onChange={this.handleChange} />
              </Form.Group>
            
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Drop off</Form.Label>
                <Form.Control type="text" name="dropoff" placeholder="Password"   onChange={this.handleChange}/>
              </Form.Group>


            </Form.Row>
            
          
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Health Conditions</Form.Label>
              <Form.Control placeholder="update it later"  name ="healthConditions"onChange={this.handleChange}/>
            </Form.Group>
          
            <Form.Group controlId="formGridAddress2">
              <Form.Label> needs</Form.Label>
              <Form.Control name="specialNeeds" placeholder="Apartment, studio, or floor"   onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label> car type</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor"  name="carDescription" onChange={this.handleChange} />
            </Form.Group>
          

            <Form.Group as={Col} >
            <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}/>
              </Form.Group>


            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        )
    }
}

export default NewRequest
