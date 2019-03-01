import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      posts: [],
      myPosts: true,
      title: '',
    }
  }

  handleTitle(val){
    console.log(val)
    this.setState({
      title: val
    })
  }

  search(){
    console.log('search')
    axios.get('/api/post/searchForPosts'
    ).then( (res) => {
      
      this.setState({
        post: res.data.events
      })
      console.log(this.state.posts)
    })

  }

  render() {
    // const mappedPosts = props.posts.map(post => {
    //   return (
    //     postTitle = {postTitle}
    //   )
    // })
    return (
      <div className="Dashboard">
        
        <input type="text" placeholder="search"
        onChange={ e => this.handleTitle(e.target.value)}/>
        <span>My Posts</span><input 
        type="checkbox"
        />
        <button onClick={ () => this.search()}>Search</button>
        <button>Reset</button>
        <h2>{this.state.post}</h2>
       
      </div>
    );
  }
}

export default Dashboard;
