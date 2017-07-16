import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      addedPhoto: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.togglePhoto = this.togglePhoto.bind(this);
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({text: event.target.value});
  }

  togglePhoto(event){
    this.setState({addedPhoto: !this.state.addedPhoto});
  }

  reaminingChars(){
    if(this.state.addedPhoto){
      return 140 - 23 - this.state.text.length;
    }else{
      return 140 - this.state.text.length;
    }
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
        <button className="js-add-photo-button btn btn-default pull-right"
          onClick={this.togglePhoto}
          >{this.state.addedPhoto ? "Photo Added" : "Add Photo"}</button>
        <span>{this.reaminingChars()}</span>
      </div>
    );
  }
}

export default App;
