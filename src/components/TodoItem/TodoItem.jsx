import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompleted } from '../../featurers/todos/todosSlice'
import styles from './TodoItem.module.scss'


const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.completed}
        onChange={() => dispatch(toggleCompleted(todo.id))}
        className={styles.field} />
      <label
        htmlFor={todo.id}
        className={styles.text}
      >
        {todo.text}
      </label>
      {/* <button>&times;</button> */}
    </div>
  )
}

export default TodoItem
