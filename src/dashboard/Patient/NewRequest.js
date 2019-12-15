import React, { Component } from 'react'
import{Form ,Col ,Button} from 'react-bootstrap';
import TimePickerPage from "./TimePickerPage"
export class NewRequest extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: "",
      email: "",
      phone: "",
      type:"Patient",
      password: "",
      passwordConfirmation: ""
    };
  }
    render() {
        return (
            <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Pick up</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
            
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Drop off</Form.Label>
                <Form.Control type="text" placeholder="Password" />
              </Form.Group>


            </Form.Row>
            
          
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Health Conditions</Form.Label>
              <Form.Control placeholder="update it later" />
            </Form.Group>
          
            <Form.Group controlId="formGridAddress2">
              <Form.Label> needs</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label> car type</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
          

            <Form.Group as={Col} >
              <TimePickerPage/>
              </Form.Group>


            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )
    }
}

export default NewRequest
