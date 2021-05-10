import React, { Component } from 'react';

class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    window.location.pathname = `/posts/${this.props.post._id}`;
  }
  renderTags(tags) {
    return tags.map((tag) => {
      return <span key={tag}>{tag}</span>;
    });
  }
  render() {
    const { post } = this.props;
    return (
      <button onClick={this.onClickHandler}>
        <h3>{post.title}</h3>
        <span>{post.createdAt}</span>
        <div>{this.renderTags(post.tags)}</div>
      </button>
    );
  }
}

export default PostListItem;
