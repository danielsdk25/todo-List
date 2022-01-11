import React from "react";
import "../../styles/todoitem/TodoItem.css";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/* <input type="checkbox" /> */}
      {/* <p>{props.text}</p> */}
      <FormGroup className="FormGroup">
        <FormControlLabel
          className="FormControlLabel"
          control={<Checkbox className="Checkbox" />}
          label={props.text}
        />
      </FormGroup>
      {/* <button>X</button> */}
      <IconButton className="Button" arial-label="delete">
        <DeleteIcon sx={{ color: "#e91e63" }} />
      </IconButton>
    </li>
  );
}

export { TodoItem };
