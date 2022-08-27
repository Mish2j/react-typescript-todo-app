import React from "react";

import "./TodoList.css";

interface TodoListProps {
  todos: { id: string; text: string }[];
  onRemoveTodo: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const listOfTodos = props.todos.map((todo) => {
    return (
      <li onClick={props.onRemoveTodo.bind(null, todo.id)} key={todo.id}>
        {todo.text}
      </li>
    );
  });

  return <ul>{listOfTodos}</ul>;
};

export default TodoList;
