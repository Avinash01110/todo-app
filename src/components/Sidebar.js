import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/todoSlice';
import { Calendar, Grid, ListTodo, Plus, Star, UserSquare } from 'lucide-react';

function Sidebar({ isOpen }) {
  const dispatch = useDispatch();
  const { filter, tasks } = useSelector((state) => state.todo);
  
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const navItems = [
    { id: 'all', label: 'All Tasks', icon: ListTodo },
    { id: 'today', label: 'Today', icon: Calendar },
    { id: 'important', label: 'Important', icon: Star },
    { id: 'planned', label: 'Planned', icon: Grid },
    { id: 'assigned', label: 'Assigned to me', icon: UserSquare },
  ];

  return (
    <div className={`
      fixed left-0 top-0 h-screen bg-white dark:bg-gray-800 border-r dark:border-gray-700
      transition-transform duration-300 ease-in-out z-10 w-64 overflow-y-scroll
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="p-4">
        {/* Profile Section */}
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="font-medium dark:text-gray-200">Hey, ABCD</h2>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => dispatch(setFilter(item.id))}
              className={`
                w-full p-2 rounded-lg text-left flex items-center gap-2
                ${filter === item.id 
                  ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
              `}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Add List Button */}
        <button className="w-full mt-4 p-2 rounded-lg text-left flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          <Plus className="w-4 h-4" />
          Add list
        </button>

        {/* Progress Chart */}
        <div className="mt-8 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-sm dark:text-gray-200">Today Tasks</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">{completedTasks}</span>
          </div>
          <div className="w-full aspect-square relative">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-gray-200 dark:stroke-gray-600"
                strokeWidth="3"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#22C55E"
                strokeWidth="3"
                strokeDasharray={`${completionPercentage} 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-semibold dark:text-gray-200">
                {Math.round(completionPercentage)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;