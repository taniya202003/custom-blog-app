import React, { useContext, useState } from "react";
import "../assets/trashbin.css";
import { Context } from "../context/ContextProvider";

export const PostsTrash = () => {
  const { setExistingData} = useContext(Context);

  const [deletedPost, setDeletedPost] = useState(
    JSON.parse(localStorage.getItem("trashBin")) || []
  );
  const handleRestore = (index) => {
    const restorePost = deletedPost.splice(index, 1)[0];
    setDeletedPost([...deletedPost]);
    localStorage.setItem("trashBin", JSON.stringify(deletedPost));

    const addPostToHome = JSON.parse(localStorage.getItem("blogPost")) || [];
    addPostToHome.push(restorePost);
    setExistingData(addPostToHome);
    localStorage.setItem("blogPost", JSON.stringify(addPostToHome));
  };

  const handleDeletePermanently = (index) => {
    deletedPost.splice(index, 1);
    setDeletedPost([...deletedPost]);
    localStorage.setItem("trashBin", JSON.stringify(deletedPost));
  };

  return (
    <div className="trashbinContainer">
      <div className="trash-grid">
        {deletedPost.map((el, index) => (
          <div key={index} className="trash-card">
            <h2>{el.title}</h2>
            <h5>{el.category}</h5>
            <div dangerouslySetInnerHTML={{ __html: el.newPostContent }}></div>
            <div className="trash-res-dele">
              <div>
                <button
                  className="trash-res-btn"
                  onClick={() => handleRestore(index)}
                >
                  RESTORE POST
                </button>
              </div>
              <div>
                <button
                  className="trash-delePerm"
                  onClick={() => handleDeletePermanently(index)}
                >
                  DELETE PERMANENTLY
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
