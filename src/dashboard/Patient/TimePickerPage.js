import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import DateTimePicker from 'react-datetime-picker'

class TimePickerPage extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })
render() {
  return (
    <div>
    <DateTimePicker
      onChange={this.onChange}
      value={this.state.date}
    />
  </div>
    );
  }
}

export default TimePickerPage;