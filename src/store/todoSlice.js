import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: '1', title: 'Buy groceries', completed: false, important: false },
    { id: '2', title: 'Finish project report', completed: false, important: true },
    { id: '3', title: 'Call the bank', completed: false, important: false },
    { id: '4', title: 'Read a book', completed: true, important: false },
    { id: '5', title: 'Clean the house', completed: true, important: false },
  ],
  selectedTask: null,
  filter: 'all',
  view: 'list'
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    toggleImportant: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.important = !task.important;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    clearSelectedTask: (state) => {
      state.selectedTask = null;
    },
  }
});

export const { addTask, toggleComplete, toggleImportant, setFilter, setView, setSelectedTask, clearSelectedTask} = todoSlice.actions;
export default todoSlice.reducer;
