import React from "react";
import blogData from "../data/blog"
import Article from "./Article";

const ArticleList = ({ posts }) => {
  const postList = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });
  return(
    <main>
      {postList}
    </main>
  )
}
export default ArticleList