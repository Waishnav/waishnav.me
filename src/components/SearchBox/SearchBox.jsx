import React from "react";

function SearchBox() {
  return (
    <div>
      <input type="text" id="user_input" onkeyup="searchFunction(false)"
        placeholder="Find post with title name or tags">
      </input>
    </div>

  )
}
export default SearchBox
