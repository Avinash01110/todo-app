import { Star } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete, toggleImportant, setSelectedTask } from '../store/todoSlice';

function TaskList({ isGridView, filter }) {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const filterTasks = (tasks) => {
    switch (filter) {
      case 'today':
        return tasks;
      case 'important':
        return tasks.filter((task) => task.important);
      case 'planned':
        return tasks;
      case 'assigned':
        return tasks;
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks(tasks);
  const activeTasks = filteredTasks.filter((task) => !task.completed);
  const completedTasks = filteredTasks.filter((task) => task.completed);

  const TaskItem = ({ task }) => (
    <div 
      className={`
        ${isGridView == 'grid' ? 'w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)]' : 'w-full'}
        flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
        rounded-lg group hover:border-gray-300 dark:hover:border-gray-600 transition-colors
        ${task.completed ? 'opacity-60' : ''}
      `}
      onClick={() => dispatch(setSelectedTask(task))}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleComplete(task.id))}
        className="w-5 h-5 rounded-lg border-2 border-gray-300 dark:border-gray-600 
                 checked:bg-emerald-500 checked:border-emerald-500 
                 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      />
      <span className={`flex-1 text-gray-900 dark:text-gray-100 
        ${task.completed ? 'line-through text-gray-500 dark:text-gray-500' : ''}`}>
        {task.title}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleImportant(task.id));
        }}
        className={`transition-colors ${
          task.important 
            ? 'text-yellow-500 hover:text-yellow-600' 
            : 'text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-500'
        }`}
      >
        <Star className="w-5 h-5" fill={task.important ? 'currentColor' : 'none'} />
      </button>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className={`${isGridView ? 'flex flex-wrap gap-6' : 'space-y-3'}`}>
        {activeTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>

      {completedTasks.length > 0 && (
        <div>
          <h2 className="text-sm font-medium mb-3 text-gray-900 dark:text-gray-100">Completed</h2>
          <div className={`${isGridView ? 'flex flex-wrap gap-6' : 'space-y-3'}`}>
            {completedTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskList;