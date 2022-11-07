import React from "react";
import { Link } from "react-router-dom"

import "./Card.css";

function Card(props) {
  if (props.name == "post") {
    return (
      <Link to={props.link} className="overview">
        <div className="title">{props.title}</div>
        <div className="date">{props.date}</div>
        <p className="description">{props.description}</p>
        <div className="categories">
        </div>
      </Link>
    )

  }
  else {
    return (
      <Link to={props.link} className="overview">
        <div className="title">{props.title}</div>
        <p className="description">{props.description}</p>
        <div className="links">
        </div>
      </Link>
    )
  }
}

export default Card
