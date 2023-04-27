import "./App.css";
import BlogContent from "./components/BlogContent";
import BlogFilter from "./components/BlogFilter";
import BlogForm from "./components/BlogForm";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import React, { useState } from "react";

function App() {
  const [blogData, setBlogData] = useState([
    {
      title: "How to Make a Delicious Smoothie",
      author: "Jane Doe",
      date: "March 1, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet eros. Proin non ante nulla. Praesent non tellus arcu. Sedmalesuada, elit vel efficitur venenatis, nisl eros sodales mi, id suscipit nulla nibh in sem. Fusce euismod sed justo sit amet dictum. Integer in lectus commodo, rhoncus nunc sed, commodo odio.",
    },
    {
      title: "The Benefits of Running Every Day",
      author: "John Smith",
      date: "April 1, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet eros. Proin non ante nulla. Praesent non tellus arcu. Sedmalesuada, elit vel efficitur venenatis, nisl eros sodales mi, id suscipit nulla nibh in sem. Fusce euismod sed justo sit amet dictum. Integer in lectus commodo, rhoncus nunc sed, commodo odio.",
    },
    {
      title: "10 Tips for traveling on a Budge",
      author: "Jem Laguda",
      date: "April 26, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet eros. Proin non ante nulla. Praesent non tellus arcu. Sedmalesuada, elit vel efficitur venenatis, nisl eros sodales mi, id suscipit nulla nibh in sem. Fusce euismod sed justo sit amet dictum. Integer in lectus commodo, rhoncus nunc sed, commodo odio.",
    },
  ]);
  return (
    <div className="App">
      <NavigationBar />
      <BlogForm blogData={blogData} setBlogData={setBlogData} />
      <BlogFilter blogData={blogData} setFilteredBlogData={setBlogData} />
      <BlogContent blogData={blogData} setBlogData={setBlogData} />
      <Footer />
    </div>
  );
}

export default App;
