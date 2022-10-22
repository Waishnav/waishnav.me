import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";
import About from "./pages/About";

import "./NavigaitonBar.css"
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as PostsIcon } from "../../assets/posts.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/projects.svg.svg";
import { ReactComponent as AboutIcon } from "../../assets/about.svg";

function NavigaitonBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <nav class="navbar">
            <div class="navbox">
              <div>
                <Route path="/" element={<Home />}>
                  <HomeIcon />
                </Route>
                <span>home</span>
              </div>
              <div>
                <Route path="posts" element={<Posts />}>
                  <PostsIcon />
                </Route>
                <span>posts</span>
              </div>
              <div>
                <Route path="projects" element={<Projects />}>
                  <ProjectsIcon />
                </Route>
                <span>projects</span>
              </div>
              <div>
                <Route path="about" element={<About />}>
                  <AboutIcon />
                </Route>
                <span>about</span>
              </div>
            </div>
          </nav>
        </Route>
      </Routes>
    </BrowserRouter >
  )

}

export default NavigaitonBar
