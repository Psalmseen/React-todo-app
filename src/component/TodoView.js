import React from "react";
import TodoComponent from "./TodoComponent";
const TodoView = ({handleCheck, handleDelete, handleEdit, state}) => {

  const displayComponent = state.allTodos.map((todo) => (
    <TodoComponent
      handleChange={handleCheck}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      key={todo.id}
      item={todo}
    />
  ));
  return <div className="todo-container">{displayComponent}</div>;
}

export default TodoView;
