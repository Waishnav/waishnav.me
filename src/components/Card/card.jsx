import React from "react";
import "./cards.css";

function card(props) {
  if (props.name == "post") {
    return (
      <div className="overview">
        <div className="title">{props.title}</div>
        <div className="date">{props.date}</div>
        <p className="description">{props.description}</p>
        <div className="categories">
        </div>
      </div>
    )

  }
  else {
    return (
      <div className="overview">
        <div className="title">{props.title}</div>
        <p className="description">{props.description}</p>
        <div className="links">
        </div>
      </div>
    )
  }
}

export default card
