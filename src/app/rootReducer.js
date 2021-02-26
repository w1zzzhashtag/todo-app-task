import { combineReducers } from "@reduxjs/toolkit";
import todos from './../featurers/todos/todosSlice'


const rootReducer = combineReducers({
  todos
})

export default rootReducer