import React from "react";
import { Link } from "react-router-dom"

import "./Card.css";

function Project(props) {
  return (
    <Link to={props.link} className="overview">
      <div className="title">{props.title}</div>
      <p className="description">{props.description}</p>
      <div className="links">
      </div>
    </Link>
  )
}

export default Project
