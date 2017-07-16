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
    this.overFlowAlertBox = this.overFlowAlertBox.bind(this);
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({text: event.target.value});
  }

  togglePhoto(event){
    this.setState({addedPhoto: !this.state.addedPhoto});
  }

  overFlowAlertBox(){
    if(this.reaminingChars() < 0){
      if (this.state.photoAdded) {
        var beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
        var overflowText = this.state.text.substring(140 - 23);
      } else {
        var beforeOverflowText = this.state.text.substring(140 - 10, 140);
        var overflowText = this.state.text.substring(140);
      }
      return(
        <div className="alert alert-warning">
          <strong>Oops! Too Long:</strong>
            &nbsp;...{beforeOverflowText}
          <strong className="bg-danger">{overflowText}</strong>
        </div>
      );
    }
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
        {this.overFlowAlertBox()}
        <h1>Tweet Box Example</h1>
        <textarea className="form-control"
          onChange={this.handleChange}
          ></textarea><br/>
        <button className="btn btn-primary pull-right"
          disabled={this.reaminingChars() === 140}
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
