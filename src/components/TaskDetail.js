import { X, Plus, Bell, Calendar, RotateCcw, Star } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearSelectedTask } from "../store/todoSlice";

export default function TaskDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const selectedTask = useSelector((state) => state.todo.selectedTask);

  const dispatch = useDispatch();

  if (!selectedTask) return null;

  return (
    <div
      className={`fixed inset-y-0 right-0 w-96 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 
      transform transition-transform duration-300 ${
        selectedTask ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 pt-20">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Created Today
          </span>
          <button
            onClick={() => {
              setIsOpen(false);
              dispatch(clearSelectedTask());
            }}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 rounded-lg border-2 border-gray-300 dark:border-gray-600 
                       checked:bg-emerald-500 checked:border-emerald-500 focus:ring-emerald-500"
            />
            <input
              type="text"
              value={selectedTask.title}
              className="flex-1 bg-transparent outline-none text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 rounded-md"
              readOnly
            />
            <button className="text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors">
              <Star
                className={`w-5 h-5 ${
                  selectedTask.important ? "text-yellow-500" : ""
                }`}
              />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="flex items-center gap-2 p-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
              Add Step
            </button>
            <button className="flex items-center gap-2 p-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Calendar className="w-4 h-4" />
              Add Due Date
            </button>
            <button className="flex items-center gap-2 p-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Bell className="w-4 h-4" />
              Set Reminder
            </button>
            <button className="flex items-center gap-2 p-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <RotateCcw className="w-4 h-4" />
              Repeat
            </button>
          </div>

          <div>
            <textarea
              placeholder="Add Notes"
              className="w-full h-32 p-3 text-sm bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 
                       placeholder:text-gray-500 dark:placeholder:text-gray-400 
                       border border-gray-200 dark:border-gray-700 rounded-lg resize-none 
                       focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
