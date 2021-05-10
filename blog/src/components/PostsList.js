import React, { Component } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import PostListItem from './PostListItem';

class PostsList extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    this.getPosts();
  }
  async getPosts() {
    const res = await axios.get('http://localhost:5000/posts/');
    this.setState({ posts: res.data });
  }
  renderList() {
    return this.state.posts.map((post) => {
      return <PostListItem post={post} key={post._id} />;
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}
export default PostsList;
