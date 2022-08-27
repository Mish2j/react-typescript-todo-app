import { useState } from "react";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = { id: Math.random().toString(), text };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList todos={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
