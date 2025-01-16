import { Bell, Calendar, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/todoSlice'

export default function AddTask() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    dispatch(
      addTask({
        id: Date.now().toString(),
        title: title.trim(),
        completed: false,
        important: false
      })
    )
    setTitle('')
  }

  return (
    <div className="max-w-6xl mx-auto mb-6">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">To Do</h1>
        <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">▼</button>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <div className="flex-1 flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm">
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Add A Task"
            className="flex-1 outline-none text-sm text-gray-900 dark:text-gray-100 bg-transparent placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <div className="flex items-center gap-2">
            <button 
              type="button" 
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Bell className="w-4 h-4" />
            </button>
            <button 
              type="button" 
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button 
              type="button" 
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          ADD TASK
        </button>
      </form>
    </div>
  )
}