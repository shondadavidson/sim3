import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      posts: [],
      myPosts: true,
      title: '',
    }
  }
  render() {
    // const mappedPosts = props.posts.map(post => {
    //   return (
    //     postTitle = {postTitle}
    //   )
    // })
    return (
      <div className="Dashboard">
        <input type="text" placeholder="search"/>
        <span>My Posts</span><input 
        type="checkbox"/>
        <button>Search</button>
        <button>Reset</button>
       
      </div>
    );
  }
}

export default Dashboard;
