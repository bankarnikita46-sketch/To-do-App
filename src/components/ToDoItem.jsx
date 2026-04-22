// ToDoItem component - single todo row with toggle / edit / delete
import { useState } from 'react';

const ToDoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  // Local state for edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  // Save the edited text and exit edit mode
  const handleSave = () => {
    if (draft.trim()) {
      onEdit(todo.id, draft);
    } else {
      setDraft(todo.text); // revert if empty
    }
    setIsEditing(false);
  };

  // Save on Enter, cancel on Escape
  const handleKey = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setDraft(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className="group flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all">
      {/* Checkbox / toggle button */}
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          todo.completed
            ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500 border-transparent'
            : 'border-gray-300 hover:border-violet-400'
        }`}
      >
        {todo.completed && (
          <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Todo text or edit input */}
      {isEditing ? (
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKey}
          autoFocus
          className="flex-1 px-2 py-1 border-b-2 border-violet-400 bg-transparent focus:outline-none text-gray-800"
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className={`flex-1 select-none ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
        >
          {todo.text}
        </span>
      )}

      {/* Action buttons */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            aria-label="Edit task"
            className="p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.4-9.6a2 2 0 112.8 2.8L11.8 15.6 8 16.5l.9-3.8 9.7-9.3z" />
            </svg>
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          aria-label="Delete task"
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.9 12.1A2 2 0 0116.1 21H7.9a2 2 0 01-2-1.9L5 7m5 4v6m4-6v6M10 4h4a1 1 0 011 1v2H9V5a1 1 0 011-1z" />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
