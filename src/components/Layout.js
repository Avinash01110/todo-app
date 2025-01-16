import { LayoutGrid, Menu, Moon, Search, Sun } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { setView } from '../store/todoSlice'
import { useTheme } from '../contexts/ThemeContext'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { isDark, toggleTheme } = useTheme()
  const dispatch = useDispatch()

  const { filter, view } = useSelector((state) => state.todo);

  const handleGrid = () => {
    if(view == 'grid') {
      dispatch(setView('list'));
    } else {
      dispatch(setView('grid'));
    }
  }

  return (
    <div className={`min-h-screen ${isDark ? 'dark:bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 z-20 flex items-center justify-between px-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <Menu className="w-5 h-5 dark:text-gray-200" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-2xl">◈</span>
            <span className="font-medium dark:text-gray-200">DoIt</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button 
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            onClick={() => handleGrid()}
          >
            <LayoutGrid className="w-5 h-5 dark:text-gray-200" />
          </button>
          <button 
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            onClick={toggleTheme}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-200" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="pt-16 flex">
        <Sidebar isOpen={sidebarOpen} />
        <MainContainer sidebarOpen={sidebarOpen} />
      </div>
    </div>
  )
}