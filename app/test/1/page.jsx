"use client";

import useLocalStorageSWR from "@/hooks/useLocalStorage";

export default function TodoApp() {
  const { value: todos, setValue: setTodos } = useLocalStorageSWR("todos", []);

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: "New Todo" }]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}
