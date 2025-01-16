import { useSelector } from 'react-redux';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';

function MainContainer({ sidebarOpen }) {
  const { filter, view } = useSelector((state) => state.todo);

  return (
    <div className={`
      flex-1 min-h-screen
      bg-gray-50 dark:bg-gray-900
      transition-all duration-300 ease-in-out
      ${sidebarOpen ? 'ml-64' : 'ml-0'}
    `}>
      <div className="p-6">
        <AddTask />
        <TaskList 
          isGridView={view}
          filter={filter}
        />
        <TaskDetail />
      </div>
    </div>
  );
}

export default MainContainer;