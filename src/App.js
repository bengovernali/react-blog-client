import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BlogList from "./components/blogList";
import BlogPost from "./components/blogPost";
import MainNav from "./components/mainNav";
import AddPost from "./components/blogAddPost";
import EditPost from "./components/editPost";

const routesArray = [
  { linkRoute: "/", linkName: "Homepage" },
  { linkRoute: "/add", linkName: "Add Post" }
];

function App() {
  return (
    <Router>
      <MainNav routes={routesArray} />
      <Route path="/" exact component={BlogList} />
      <Route path="/post/:post_id?" exact component={BlogPost} />
      <Route path="/add" exact component={AddPost} />
      <Route path="/edit/:post_id?" exact component={EditPost} />
    </Router>
  );
}

export default App;
