import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
    }
  }
  render() {
    return (
      <div className="well clearfix">
        <h1>Tweet Box Example</h1>
        <textarea className="form-control"></textarea><br/>
        <button className="btn btn-primary pull-right"
          disabled
          >Tweet</button>
      </div>
    );
  }
}

export default App;
