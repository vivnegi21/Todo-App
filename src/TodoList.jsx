import React from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
const ToDoList = (props)=>{

    return(
        <>
        <div className="todo_style">
        <RemoveCircleIcon onClick={()=>{
                props.onSelect(props.id);
            }}></RemoveCircleIcon>

            <li> {props.text}</li>
        </div>
        </>
    );
};

export default ToDoList;