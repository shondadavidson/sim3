import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {authorize} from '../../ducks/reducer'

class Auth extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername(val){
    this.setState({
      username: val
    })
  }

  handlePassword(val){
    this.setState({
      password: val
    })
    
  }

  registerUser(){
    // console.log('register user hit')
    const { username, password } = this.state
    // console.log(username, password)
    axios.post('/api/auth/register', {username, password}).then(resp => {
      this.props.authorize(resp.data.id, resp.data.username, resp.data.profile_pic)
      this.props.history.push('/Dashboard')
    })
  }

  login(){
    // console.log('register user hit')
    const { username, password } = this.state
    // console.log(username, password)
    axios.post('/api/auth/login', {username, password}).then(resp => {
      this.props.authorize(resp.data.id, resp.data.username, resp.data.profile_pic)
      this.props.history.push('/Dashboard')
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="Auth">
        <input 
          type="text" 
          placeholder="username"  
          onChange={ e => this.handleUsername(e.target.value)}/>
        <input 
          type="password" 
          placeholder="password"  
          onChange={ e => this.handlePassword(e.target.value)}/>
        <button onClick={ () => this.login()}>Login</button>
        <button onClick={() => this.registerUser()}>Register</button>
       
      </div>
    );
  }
}



export default connect(null, {authorize})(Auth);
