import React, { Component } from "react";
import { ThemeContext } from "../../../ThemeContext/ThemeContext";
import{Form ,Col ,Button} from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
export class UpdateRequest extends Component {
  constructor() {
    super();

    this.state = {
      assistantId: "",
      date: new Date(),
      pickup: "",
      dropoff: "",
      carDescription: "",
      healthConditions: "",
      specialNeeds: "",
      package: Boolean,
      token: ""
    };
  }

  static contextType = ThemeContext;
  componentDidMount() {
      const temp =this.context.reqid
      console.log(this.context.reqid,"done")
    this.setState({
        assistantId: temp.assistantId,
        date: temp.date,
        pickup: temp.pickup,
        dropoff: temp.dropoff,
        carDescription:temp.carDescription,
        healthConditions: temp.healthConditions,
        specialNeeds: temp.specialNeeds,
        package: temp.package,
        token: temp.token
    });
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onChange = date => this.setState({ date });
  
  newReq = event => {

    event.preventDefault();
  
  };
  render() {
    return (
      <Form onSubmit={this.newReq}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGrid1">
            <Form.Label>Pick up</Form.Label>
            <Form.Control
              type="text"
              name="pickup"
              placeholder={this.state.pickup}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Drop off</Form.Label>
            <Form.Control
              type="text"
              name="dropoff"
              placeholder={this.state.dropoff}
              
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Health Conditions</Form.Label>
          <Form.Control
            
            name="healthConditions"
            placeholder={this.state.healthConditions}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label> needs</Form.Label>
          <Form.Control
            name="specialNeeds"
            placeholder={this.state.specialNeeds}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          <Form.Label> car type</Form.Label>
          <Form.Control
            
            name="carDescription"
            placeholder={this.state.carDescription}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <DateTimePicker onChange={this.onChange} value={this.state.date} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    );
  }
}

export default UpdateRequest;
