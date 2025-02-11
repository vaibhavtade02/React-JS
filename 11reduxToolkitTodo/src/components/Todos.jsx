import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null); // Track which todo is being edited
  const [editText, setEditText] = useState(""); // Store updated text

  const handleEdit = (todo) => {
    setEditId(todo.id); // Set edit mode
    setEditText(todo.text); // Pre-fill with current text
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, newText: editText }));
      setEditId(null); // Exit edit mode
    }
  };

  return (
    <>
      <div className="text-xl font-bold mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              // Show input field when editing
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="text-black px-2 py-1 rounded w-full"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className="flex space-x-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-500 py-1 px-4 rounded hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-blue-500 py-1 px-4 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 py-1 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
