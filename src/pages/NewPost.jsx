import React, { useContext, useEffect, useState } from "react";
import { BlogEditor } from "../components/BlogEditor";
import "../assets/newPost.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/ContextProvider";

export const NewPost = () => {
  const [title, setTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const {setExistingData} = useContext(Context)

console.log(title,"title")

  useEffect(() => {
    const editPostIndex = localStorage.getItem("editPostIndex");
    // geting post index number
    if (editPostIndex !== null) {
      const editPostData = JSON.parse(localStorage.getItem("blogPost")) || [];
      // getting all blogpost data
      const postToEdit = editPostData[parseInt(editPostIndex)];
      // parseInt convert string value to number/integer so that post can be access by index number
      setTitle(postToEdit.title);
      setCategory(postToEdit.category);
      setNewPostContent(postToEdit.newPostContent);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogPost = {
      title,
      category,
      newPostContent,
    };

    let existingData = JSON.parse(localStorage.getItem("blogPost")) || [];
    console.log(existingData,"existingData")
    const editPostIndex = localStorage.getItem("editPostIndex");
    // Retrieves the index of the post being edited from localStorage.

    if (editPostIndex !== null) {
      
      existingData[parseInt(editPostIndex)] = blogPost;
      setExistingData([...existingData]);

      // existingData[parseInt(editPostIndex)] = blogPost;
    } else {
      setExistingData([...existingData, blogPost])
      existingData = [...existingData, blogPost];
    }
    // If editPostIndex exists, update the existingData array at the index specified by editPostIndex with the new blogPost object.
    //parseInt(editPostIndex) converts the string index editPostIndex to a number to ensure correct array indexing.

    localStorage.setItem("blogPost", JSON.stringify(existingData));

    setTitle("");
    setCategory("");
    setNewPostContent("");
    localStorage.removeItem("editPostIndex");
    navigate("/");
  };
  return (
    <div className="newPost-container">
      <form className="newPost-form" onSubmit={handleSubmit}>
        <div className="NP-in-div">
          <div className="newPost-title">
            <label className="newPost-titleLabel">Title:</label>
            <input
              className="newPost-title-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="newPost-title">
            <label className="newPost-titleLabel">Category:</label>
            <input
              className="newPost-category-input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="NP-content">
            <BlogEditor
              setNewPostContent={setNewPostContent}
              newPostContent={newPostContent}
            />
          </div>
          <div className="NP-form-btn">
            <button className="NP-subm-btn" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
