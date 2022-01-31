import React from 'react';
import '../../styles/todoitem/TodoItem.css';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem(props) {
  // const onCompleted = () => {
  //   console.log('Has completado la tarea <<' + props.text + '>>.');
  // };
  // const onDelete = () => {
  //   console.log('Has borrado la tarea <<' + props.text + '>>.');
  // };

  return (
    <li className={`TodoItem ${props.completed && 'job--finished'}`}>
      {/* <input type="checkbox" /> */}
      {/* <p>{props.text}</p> */}
      <FormGroup className="FormGroup">
        <FormControlLabel
          className={`FormControlLabel ${props.completed && 'Job--completed'}`}
          onClick={props.onComplete}
          control={
            <Checkbox
              className={`Checkbox ${props.completed && 'Checkbox--active'}`}
            />
          }
          label={props.text}
        />
      </FormGroup>
      {/* <button>X</button> */}
      <IconButton
        className="Button"
        arial-label="delete"
        onClick={props.onDelete}
      >
        <DeleteIcon sx={{ color: '#e91e63' }} />
      </IconButton>
    </li>
  );
}

export { TodoItem };
