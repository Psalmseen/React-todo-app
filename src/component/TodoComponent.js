import React from "react"
function TodoComponent(props){
    const done = {
        background:"#7bc1604f",
        textDecoration:"line-through",
        color:"#eeeeee4f"
    }

    return (
        <div style={ props.item.isCompleted ? done : {background: "#ff00004f"} } className="todo-item">
        
                <input type="checkbox"  id={"box"+props.item.id}checked={props.item.isCompleted} onChange={() => props.handleChange(props.item.id)} />
                <label htmlFor={"box"+props.item.id}> {props.item.text}</label>
                <button onClick={() => props.handleEdit(props.item.id)}>  Edit</button>
                <button onClick={() => props.handleDelete(props.item.id)}>  Delete</button>
            
        </div>
    )
}

export default TodoComponent