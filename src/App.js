import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewPost } from "./pages/NewPost";
import { Navbar } from "./components/Navbar";
import { PostsTrash } from "./pages/PostsTrash";
import { BlogSearch } from "./components/BlogSearch";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/posttrash" element={<PostsTrash/>} />
        <Route path="/blogsearch" element={ <BlogSearch />} />
      </Routes>
    </div>
  );
}

export default App;
