import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // Add styles

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book added:", book);
    alert("Book added successfully! (This is a placeholder)");
    navigate("/"); // Redirect back to Home
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={book.title} onChange={handleChange} required />

        <label>Author:</label>
        <input type="text" name="author" value={book.author} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={book.description} onChange={handleChange} required />

        <label>Cover Image URL:</label>
        <input type="url" name="coverImage" value={book.coverImage} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
