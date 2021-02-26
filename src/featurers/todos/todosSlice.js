import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  todoItems: [
    { id: 1, text: 'Complete a task for a Junior', completed: true },
    { id: 2, text: 'Complete a task for a Junior+', completed: true },
    { id: 3, text: 'Complete a task for a Middle', completed: true },
    { id: 4, text: 'Complete a task for a Middle+', completed: true },
    { id: 5, text: 'Complete a task for a Senior', completed: false },
  ],
  filters: ['all', 'completed', 'current' ],
  activeFilter: 'all'
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoItems.push({
        id: state.todoItems.length + 1,
        text: action.payload,
        completed: false
      })
    },
    toggleCompleted: (state, action) => {
      const todo = state.todoItems.find(t => t.id === action.payload)
      todo.completed = !todo.completed
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
  }
})

export const {
  addTodo, toggleCompleted, setActiveFilter
} = todosSlice.actions
export default todosSlice.reducer