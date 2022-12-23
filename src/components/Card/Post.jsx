import React from "react";
import { Link } from "react-router-dom"

import "./Card.css";

function Post(props) {
  return (
    <Link to={props.link} className="overview">
      <div className="title">{props.title}</div>
      <div className="date">{props.date}</div>
      <p className="description">{props.description}</p>
      <div className="categories">
        {props.categories.map((tag) => {
          <div className="tag">#{tag}</div>
        })}
      </div>
    </Link>
  )

}

export default Post
