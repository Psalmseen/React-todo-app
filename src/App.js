import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Form from "./component/Form";
import TodoView from "./component/TodoView";

const App = () => {
  const [state, setState] = useState({
    currentTodo: "",
    allTodos: [],
  });

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("state")));
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const handleDelete = (id) => {
    // set isDeleted to animate deleted todo
    const recentlyDeleted = state.allTodos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          isDeleted: !todo.isDeleted,
        };
      }
      return todo;
    });

    setState({
      ...state,
      allTodos: recentlyDeleted,
    });

    // handles delete after animation
    setTimeout(() => {
      const presentTodo = state.allTodos.filter((todo) => todo.id !== id);
      setState({
        ...state,
        allTodos: presentTodo,
      });
    }, 250);
  };

  const handleEdit = (id) => {
    // sets isEditing to animate the editing function
    const recentlyEdited = state.allTodos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          isEditing: !todo.isEditing,
        };
      }
      return todo;
    });

    setState({
      ...state,
      allTodos: recentlyEdited,
    });
    // moves the todo item to the input box after animation
    setTimeout(() => {
      const editedTodo = state.allTodos.filter((todo) => todo.id !== id);
      const properEditedTodo = editedTodo.map((todo, i) => {
        return { ...todo, id: i };
      });
      const [text] = state.allTodos.filter((todo) => todo.id === id);
      setState({
        ...state,
        currentTodo: text.text,
        allTodos: properEditedTodo,
      });
    }, 150);
  };

  const handleCheck = (id) => {
    const recentTodo = state.allTodos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });

    setState({
      ...state,
      allTodos: recentTodo,
    });
  };

  const handleChange = ({ target: { value } }) => {
    setState({ ...state, currentTodo: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("state", JSON.stringify(state));
    if (state.currentTodo) {
      const todotext = state.currentTodo;
      const todoId = state.allTodos.length;
      const newTodo = {
        text: todotext,
        isCompleted: false,
        id: todoId,
        isEditing: false,
        isDeleted: false,
      };
      const updatedTodo = [...state.allTodos, newTodo];
      setState({ ...state, allTodos: updatedTodo, currentTodo: "" });
    }
    return;
  };

  return (
    <div>
      <Header />
      <Form
        value={state.currentTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <TodoView
        state={state}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;
