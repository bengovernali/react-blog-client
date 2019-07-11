import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import BlogList from './components/blogList';
import BlogPost from './components/blogPost';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Link to="/"><h1>Blog Post</h1></Link>
      <Route path="/" exact component={BlogList}/>
      <Route path='/post/:post_id?' exact component={BlogPost}/>
    </Router>
  );
}

export default App;
