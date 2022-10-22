import React from "react";

import "./NavigaitonBar.css"

function NavLink(props) {
  return (
    <div>
      <a href="./" class="nav-links">{props.svg}</a>
      <span>home</span>
    </div>

  )
}
export default NavLink

function NavigaitonBar() {
  return (
    <nav class="navbar">
      <div class="navbox">
      </div>
    </nav>
  )

}
