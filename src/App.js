import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className="well clearfix">
        <h1>Tweet Box Example</h1>
        <textarea className="form-control"
          onChange={this.handleChange}
          ></textarea><br/>
        <button className="btn btn-primary pull-right"
          disabled={this.state.text.length === 0}
          >Tweet</button>
      </div>
    );
  }
}

export default App;
