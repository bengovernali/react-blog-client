import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogPost extends Component {
  state = {
    post: {},
    content: ""
  };

  async componentDidMount() {
    const post = await this.loadData();
    this.setState({
      post
    });
  }

  loadData = async () => {
    const postId = this.props.match.params.post_id;
    console.log(postId);
    const url = `http://localhost:3000/v1/post/${postId}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  deleteData = async () => {
    const postId = this.props.match.params.post_id;
    const url = `http://localhost:3000/v1/delete/${postId}`;
    const response = await fetch(url);
    return response;
  };

  render() {
    const { post } = this.state;
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link onClick={this.deleteData} to={`/`}>
          Delete Post
        </Link>
        <Link to={`/edit/${post.id}`}>Edit Post</Link>
      </div>
    );
  }
}

export default BlogPost;
