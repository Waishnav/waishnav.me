import React from "react";
import { Link } from "react-router-dom"

import "./NavigationBar.css"
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as PostsIcon } from "../../assets/posts.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/projects.svg";
import { ReactComponent as AboutIcon } from "../../assets/about.svg";

function NavigatonBar() {
  return (
    <nav className="navbar">
      <div className="navbox">
        <div>
          <Link className="nav-links" to="/">
            <HomeIcon />
          </Link>
          <span>home</span>
        </div>
        <div>
          <Link className="nav-links" to="/posts">
            <PostsIcon />
          </Link>
          <span>posts</span>
        </div>
        <div>
          <Link className="nav-links" to="/projects">
            <ProjectsIcon />
          </Link>
          <span>projects</span>
        </div>
        <div>
          <Link className="nav-links" to="/about">
            <AboutIcon />
          </Link>
          <span>about</span>
        </div>
      </div>
    </nav>
  )
}

export default NavigatonBar
