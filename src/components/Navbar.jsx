import React from "react";
import { Link } from "react-router-dom";
import "../assets/navbar.css";
import { MdPostAdd } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BlogSearch } from "./BlogSearch";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul className="navUl">
          <li className="navLi">
            <Link className="navLink" to="/">
              <IoHome size={"24px"} /> HOME
            </Link>
          </li>
          <li className="navLi">
            <Link className="navLink" to="/newpost">
              <MdPostAdd size={"26px"} /> NEW
            </Link>
          </li>
          <li className="navLi">
            <Link className="navLink" >
              <BlogSearch/>
            </Link>
          </li>
          <li className="navLi">
            <Link className="navLink" to="/posttrash">
              <FaTrashAlt size={"20px"} className="trashbin" /> TRASHBIN
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
