"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [input, setInput] = useState("");

  // CREATE
  const addTodo = () => {
    if (!input.trim()) return;
    const newTodos = [...todos, { id: Date.now(), text: input }];
    setTodos(newTodos);
    setInput("");
  };

  // UPDATE
  const updateTodo = (id, newText) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(newTodos);
  };

  // DELETE
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Todo App (LocalStorage)</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <input
              type="text"
              value={todo.text}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
              className="border-none outline-none flex-1"
            />
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
