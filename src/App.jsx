// Root App component - manages the to-do list state
// State and handler functions are passed down to child components via props
import { useState } from 'react';
import Header from './components/Header.jsx';
import ToDoList from './components/ToDoList.jsx';

const App = () => {
  // Main state: array of todo objects { id, text, completed }
  const [todos, setTodos] = useState([
    { id: 1, text: 'Welcome! Click the circle to complete a task', completed: false },
    { id: 2, text: 'Use the pencil icon to edit any task', completed: false },
    { id: 3, text: 'This task is already completed ✓', completed: true },
  ]);
  const [input, setInput] = useState('');

  // Add a new todo to the list
  const addTodo = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
    setInput('');
  };

  // Toggle completed flag for a todo
  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // Remove a todo from the list
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Update the text of an existing todo
  const editTodo = (id, newText) => {
    const trimmed = newText.trim();
    if (!trimmed) return;
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: trimmed } : t)));
  };

  // Stats for the footer
  const remaining = todos.filter((t) => !t.completed).length;
  const total = todos.length;

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10">
      <Header total={total} remaining={remaining} />

      <main className="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 p-6 sm:p-8 mt-8">
        {/* Add todo form */}
        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 rounded-xl border-2 border-violet-100 focus:border-violet-400 focus:outline-none bg-white text-gray-800 placeholder-gray-400 transition-colors"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-300/50 hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            + Add
          </button>
        </form>

        {/* List of todos */}
        <ToDoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />

        {/* Footer stats */}
        {total > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
            <span>{remaining} of {total} remaining</span>
            <span className="text-violet-600 font-semibold">{total - remaining} done</span>
          </div>
        )}
      </main>

      <p className="mt-8 text-sm text-gray-500">Built with React + Vite + Tailwind CSS</p>
    </div>
  );
};

export default App;
