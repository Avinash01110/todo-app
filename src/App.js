import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './store/todoSlice.js'
import Layout from './components/Layout.js'
import AddTask from './components/AddTask.js'
import TaskList from './components/TaskList.js'
import TaskDetail from './components/TaskDetail.js'
import { ThemeProvider } from './contexts/ThemeContext.js'
import { useState } from 'react'

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})

export default function Home() {
  const [isGridView, setIsGridView] = useState(false)
  
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <AddTask />
          <TaskList isGridView={isGridView} />
          <TaskDetail />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

