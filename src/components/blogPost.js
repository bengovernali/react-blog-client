import React, { Component } from 'react';

class BlogPost extends Component {
    state = {
        post: {}
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
    }

    // addPost = async (newPost) => {
    //     this.setState({
    //         post: ++newPost
    //     })
    // }

    render() {
        const { post } = this.state;
        return (
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
        );
    }
}

export default BlogPost;


