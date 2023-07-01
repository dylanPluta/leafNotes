import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import leaf from '../images/leaf.png'

function Header() {
  return (
    <header>
      <h1>
        {/* <HighlightIcon /> */}
        <img src={leaf} className="leafIcon"></img>
        leafNotes
      </h1>
    </header>
  );
}

export default Header;
