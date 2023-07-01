import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import dltLeaf from "../images/leafX.png"
import { Link, link } from "react-router-dom";

function Note(props) {
  
  function handleClick() {
    props.onDelete(props.id);
  }


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>



    <Link to={'posts/' + props.id}>
     <p>moremore</p>
    </Link>


      <button className="dltBtn" onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
