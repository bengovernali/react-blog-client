import React, { Component } from "react";

class EditPost extends Component {
  state = {
    title: "",
    content: "",
    author_id: null
  };

  async componentDidMount() {
    const post = await this.loadData();
    console.log(post);
    this.setState({
      title: post.title,
      content: post.content,
      author_id: post.author_id
    });
  }

  loadData = async () => {
    const postId = this.props.match.params.post_id;
    const url = `http://localhost:3000/v1/post/${postId}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  handleContentChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const postId = this.props.match.params.post_id;
    const content = this.state.content;
    const data = { content };
    const url = `http://localhost:3000/v1/post/update/${postId}`;
    const response = fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200) {
          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <h2>{this.state.title}</h2>
        <form onSubmit={this.handleSubmit}>
          <label> Content: </label>
          <input
            type="text"
            onChange={this.handleContentChange}
            value={this.state.content}
            name="content"
          />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default EditPost;
