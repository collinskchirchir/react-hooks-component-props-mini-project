import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


function App() {
  console.log(blogData);
  return (
    <>
    <Header />
    <About img ={blogData.image} about={blogData.about}/>
    <ArticleList posts={blogData.posts}/>
    </>
  );
}

export default App;
