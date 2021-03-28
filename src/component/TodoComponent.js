import React from "react"
function TodoComponent(props){
    const done = {
        background:"#09151593",
        color:"#eeeeee4f"
    }

    return (
        <div style={ props.item.isCompleted ? done : {background: "#ff000022"} } className={props.item.isEditing ? "todo-item editing" : props.item.isDeleted ? "todo-item deleted" :"todo-item"}>
        
                <input type="checkbox"  id={"box"+props.item.id} checked={props.item.isCompleted} onChange={() => props.handleChange(props.item.id)} />
                <label className="todo-text"   style={ {textDecoration: props.item.isCompleted ? "line-through": "none"}} htmlFor={"box"+props.item.id}> {props.item.text}</label>
                <button onClick={() => props.handleEdit(props.item.id)}>  Edit</button>
                <button className="del" onClick={() => props.handleDelete(props.item.id)}>  Delete</button>
            
        </div>
    )
}

export default TodoComponent