import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav/Nav'
import {withRouter} from 'react-router-dom'
import Routes from './route'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes/>
        <Nav location={this.props.location}/>
        
        
      </div>
    );
  }
}

export default withRouter(App);
