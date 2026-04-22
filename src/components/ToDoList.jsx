// ToDoList component - renders the list of todos using map()
import ToDoItem from './ToDoItem.jsx';

const ToDoList = ({ todos, onToggle, onDelete, onEdit }) => {
  // Empty state
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-3">📝</div>
        <p className="text-gray-500 font-medium">No tasks yet</p>
        <p className="text-gray-400 text-sm mt-1">Add one above to get started!</p>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {/* Render each todo with a unique key (item id) */}
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
