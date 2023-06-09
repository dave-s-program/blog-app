import React, { useMemo } from "react";
import "./BlogFilter.css";

const BlogFilter = ({ blogData, setFilteredBlogData }) => {
  const handleFilter = (event) => {
    const filterValue = event.target.value;
    if (filterValue === "All") {
      window.location.reload();
      //   setFilteredBlogData(blogData);
    } else {
      const filteredData = blogData.filter((post) => post.date === filterValue);
      setFilteredBlogData(filteredData);
    }
  };

  const filteredOptions = useMemo(() => {
    return blogData.map((post, index) => (
      <option value={post.date} key={index}>
        {post.date}
      </option>
    ));
  }, [blogData]);

  return (
    <div className="container">
      <label className="filter-by-date">Filter by Date:</label>
      <select className="filter-by-date" onChange={handleFilter}>
        <option value="All">All</option>
        {filteredOptions}
      </select>
    </div>
  );
};

export default BlogFilter;
