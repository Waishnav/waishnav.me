import Card from "../Card/Card"
import { Link } from "react-router-dom"

import "./Showcase.css"

function Showcase(props) {
  return (
    <section className="showcase">
      <h1> Latest {props.type}
        <div className="underline"></div>
      </h1>
      <div className="container">
        <Card />
        <Card />
        <Card />
      </div>
      <Link to={(props.type)} className="more-button">See More</Link>
    </section>
  );
}
export default Showcase

