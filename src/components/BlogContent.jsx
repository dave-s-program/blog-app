import React, { useState } from "react";
import "./BlogContent.css";
import Box from "./Box";

const BlogContent = ({ blogData, setBlogData }) => {
  return (
    <div className="box-container">
      {blogData.length > 0 ? (
        blogData.map((post, index) => (
          <Box
            index={index}
            title={post.title}
            author={post.author}
            date={post.date}
            content={post.content}
            blogData={blogData}
            setBlogData={setBlogData}
          ></Box>
        ))
      ) : (
        <h2 className="noposttodisplay">No blog post to display</h2>
      )}
    </div>
  );
};

export default BlogContent;
