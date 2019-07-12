import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            posts: []
        };
    }

    async componentDidMount() {
        const posts = await this.loadData();
        this.setState({
            posts
        })
    }

    loadData = async () => {
        const url = 'http://localhost:3000/v1/all';
        const response = await fetch(url);
        const data = response.json();
        return data;
    }

    handleChange = async (event) => {
        const changeValue= await this.setState({
            posts: event.target.value
        });
        console.log(changeValue);
        return changeValue;
    }

    render() {
        const { posts } = this.state;
        
        return (
            <>
                <ul>
                    {posts.map((post) => {
                        return <li key={`post=${post.id}`}><Link to ={`/post/${post.id}`}>{post.title}</Link></li>
                        }
                    )}
                    
                </ul>
                <form>
                    <label>
                        Title:
                        <input type="text" value={this.state.value} onChange={() => this.changeValue}></input>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <h2>Add a Post:</h2>
                <div>
                    <input type='text' placeholder='Title' value={posts.title}/>
                    <input type='text' placeholder='Content' value={posts.content}/>
                    <input type='text' placeholder='Author ID' value={posts.author_id}/>
                </div>
            </>
        );
    }
}

export default BlogList;