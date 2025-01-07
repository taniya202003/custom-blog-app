import React, { useContext, useState } from "react";
import "../assets/home.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/ContextProvider";

export const Home = () => {
const {exsistingData,setExistingData,filterPost,search} = useContext(Context)
  // const exsistingData = JSON.parse(localStorage.getItem("blogPost")) || [];
  const [blogPost, setBlogPost] = useState(exsistingData);
  const navigate = useNavigate();
console.log(exsistingData,'exsistingData')

  const handelPostDelete = (index) => {
    const deletedPost = blogPost.splice(index,1)[0];
    console.log(deletedPost,'deletedPost')
    // The splice() method adds or removes array elements.
    // index is used for index number
    // 1 is used as perameter so that it only delete one item from blogpost array
    // [0]:is used to access the deleted item from array
    setBlogPost([...blogPost]);
    // updating state
    setExistingData([...blogPost])
    localStorage.setItem("blogPost", JSON.stringify(blogPost));
    // setting updated data in localStorage
    const trashPosts = JSON.parse(localStorage.getItem("trashBin")) || [];
    
    // getting deleted data from local storage
    trashPosts.push(deletedPost);
    // adding deleted post into trashbin array with push
    localStorage.setItem("trashBin", JSON.stringify(trashPosts));
    // Store updated trashBin array in localStorage
  };
  
  const handlePostEdit = (index) => {
    navigate("/newpost");
  localStorage.setItem("editPostIndex", index.toString())
    // converting index number into string
    // localstorage can only access string key value pair
  };
//console.log( localStorage.get("editPostIndex", index.toString()))
//this console is to check that post index number is in string or not
//typeof is used to see data type 
// to console setItem we have to get that item, we cant console setitem 

  return (
    <div className="homeContainer">
      <div className="blog-grid">
      {
        (search
          ? filterPost
          : exsistingData
        ).map((item, index) => (
          <div key={index} className="blog-card">
            <h2>{item.title}</h2>
            <h5>{item.category}</h5>
            <div
              dangerouslySetInnerHTML={{ __html: item.newPostContent }}
            ></div>
            {/* dangerouslySetInnerHTML this is used to get submitted editor data in react in html form  */}
            <div className="post-dele-edi-btn">
              <div>
                <button
                  className="post-dele-btn"
                  onClick={() => handelPostDelete(index)}
                >
                  DELETE
                </button>
              </div>
              <div>
                <button
                  className="post-edit-btn"
                  onClick={() => handlePostEdit(index)}
                >
                  EDIT
                </button>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};
