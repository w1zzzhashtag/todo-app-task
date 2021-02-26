import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../featurers/todos/todosSlice'
import styles from './AddTodoField.module.scss'

const MIN_LENGTH_TO_ADD = 3

const AddTodoField = () => {
  const dispatch = useDispatch()

  const [value, setValue] = React.useState('')

  const handleChange = (e) => setValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim().length > MIN_LENGTH_TO_ADD) {
      dispatch(addTodo(value))
      setValue('')
    } else alert('You entered less than 3 characters')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.wrapper}
    >
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={styles.field} />
      <button
        type="submit"
        className={styles.button}
      >
        Add
      </button>
    </form>
  )
}

export default AddTodoField
