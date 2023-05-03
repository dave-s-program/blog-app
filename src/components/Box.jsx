import React, { useState, useCallback } from "react";
import "./Box.css";

const Box = ({
  index,
  title,
  author,
  date,
  content,
  blogData,
  setBlogData,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(author);
  const [newContent, setNewContent] = useState(content);

  const handleDelete = useCallback(() => {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      const updatedBlogData = [...blogData];
      updatedBlogData.splice(index, 1);
      setBlogData(updatedBlogData);
    } else {
      return false;
    }
  }, [index, blogData, setBlogData]);

  const handleSave = useCallback(() => {
    const updatedBlogData = [...blogData];
    updatedBlogData[index] = {
      title: newTitle,
      author: newAuthor,
      date: date,
      content: newContent,
    };
    setBlogData(updatedBlogData);
    setIsEditing(false);
  }, [date, blogData, index, newAuthor, newContent, newTitle, setBlogData]);

  return (
    <div className="box">
      <h2 className="box-title">{title}</h2>
      <p className="box-date">
        by {author} {date}
      </p>
      <div className="box-content">{content}</div>
      <button className="editblog" onClick={() => setIsEditing(true)}>
        Edit
      </button>
      <button className="deleteblog" onClick={handleDelete}>
        Delete
      </button>
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Blog Post</h2>
            <label>Title:</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <label>Author:</label>
            <input
              type="text"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
            />
            <label>Content:</label>
            <textarea
              rows={10}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            ></textarea>
            <div className="modal-buttons">
              <button
                style={{ marginRight: "10px", width: "80px" }}
                className="deleteblog"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button className="editblog" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Box;
