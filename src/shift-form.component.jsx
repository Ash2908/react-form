import React from 'react';
import './shift-form.css';
import ShiftsPage from './shiftspage.component';

class ShiftForm extends React.Component {
    constructor(props) {
      super(props);
      let today=new Date();
      // let present_time=today.toLocaleTimeString().replace(/:\d+ /, ' ');
      this.state = {
        start_date: today,
        repeat_type:'Repeats',
        shift:'Shifts',
        start_time:'00:00',
        end_time:'00:01',
        daySelected:"Monday",
        weekdays:true,
        isSubmitted:false
      }
    }

    handleSubmit = event => {
        // return props.history.push('/shifts')
        this.setState({isSubmitted:true});
        event.preventDefault();
    }

    handleChange = event => {
      const target = event.target;
      const value = target.type === 'radio' ? target.checked : target.value;
      const name = target.name;
        this.setState({[name]: value})
    }

    handleOptionChange = event => {
      this.setState({
        daySelected: event.target.value
      });
    };

    renderForm = () => {
      return(
      <div className="shift-form">
        <h4>Select Start Date and Shift Times</h4>
        <span>each row represents a shift</span>
        <form onSubmit={this.handleSubmit}>
          <label className="spacing">
            <h5>Select Start Date</h5>
          <input type="date" name="start_date" value={this.state.start_date} onChange={this.handleChange} required/>
          </label>
          <br></br>
          <label className="spacing">
            <h5>Select Repeat Type</h5>
          <select name="repeat_type" value={this.state.repeat_type} onChange={this.handleChange} required>
              <option value="Repeats">Repeats</option>
              <option value="None">None</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
          </select>
          </label>
          <br></br>
          <label className="spacing">
            <h5>Select Shift</h5>
          <select name="shift" value={this.state.shift} onChange={this.handleChange} required>
              <option value="Shifts">Shifts</option>
              <option value="Morning Shift - 5am to 9am">Morning Shift - 5am to 9am</option>
          </select>
          </label>
          <br></br>
          <label className="spacing">
            <h5>Select Start Time</h5>
          <input type="time" name="start_time" value={this.state.start_time} onChange={this.handleChange} required/>
          </label>
          <br></br>
          <label className="spacing">
            <h5>Select End Time</h5>
          <input type="time" name="end_time" value={this.state.end_time} onChange={this.handleChange} required/>
          </label>
          <br></br>
          <fieldset>
          <legend className="spacing linewrap">Please select the day of the week</legend>
          <br></br>
          <input type="radio" name="Monday" value="Monday" checked={this.state.daySelected==="Monday"} onChange={this.handleOptionChange}/>MON
          <input type="radio" name="Tuesday" value="Tuesday" checked={this.state.daySelected==="Tuesday"} onChange={this.handleOptionChange}/>TUE
          <input type="radio" name="Wednesday" value="Wednesday" checked={this.state.daySelected==="Wednesday"} onChange={this.handleOptionChange}/>WED
          <input type="radio" name="Thursday" value="Thursday" checked={this.state.daySelected==="Thursday"} onChange={this.handleOptionChange}/>THU
          <input type="radio" name="Friday" value="Friday" checked={this.state.daySelected==="Friday"} onChange={this.handleOptionChange}/>FRI
          <input type="radio" name="Saturday" value="Saturday" checked={this.state.daySelected==="Saturday"} onChange={this.handleOptionChange}/>SAT
          <input type="radio" name="Sunday" value="Sunday" checked={this.state.daySelected==="Sunday"} onChange={this.handleChange}/>SUN
          </fieldset>
          <br></br>
          <input type="radio" name="Weekdays" checked={this.state.weekdays===!(this.state.daySelected==="Saturday"||this.state.daySelected==="Sunday")} onChange={this.handleChange}/>
          <h5>Weekdays Only</h5>
          <br></br>
          <input className="spacing" type="submit" value="Submit Form" />
        </form>
      </div>);

    }
  
    render() {
      return(
      <div>
      {this.state.isSubmitted?<ShiftsPage/>: this.renderForm()} 
      </div>
      )
  }
}
  
  export default ShiftForm;