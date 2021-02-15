import React from "react"
import TodoComponent from "./TodoComponent"
function TodoView(props){
    const displayComponent = props.state.allTodos.map(todo => <TodoComponent 
                                            handleChange={props.handleCheck}
                                            handleDelete = {props.handleDelete} 
                                            handleEdit = {props.handleEdit} 
                                            key={todo.id} 
                                            item={todo} />)
    return(
        <div className="todo-container">
            {displayComponent}
        </div>
    )
}

export default TodoView