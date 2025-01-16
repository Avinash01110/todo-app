// Task object structure
const Task = {
    id: '',
    title: '',
    completed: false,
    important: false,
    dueDate: undefined,
    steps: [],
    notes: undefined
  };
  
  const TodoState = {
    tasks: [],
    selectedTask: null,
    filter: 'all',
    view: 'list'
  };
  