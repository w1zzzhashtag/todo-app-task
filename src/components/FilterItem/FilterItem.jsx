import React from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveFilter } from '../../featurers/todos/todosSlice'
import styles from './FilterItem.module.scss'

const FilterItem = ({ filter, filterTodos }) => {
  const dispatch = useDispatch()
  const {activeFilter} = useSelector(state => state.todos)

  return (
    <button 
      className={cn(styles.wrapper, {
        [styles.active]: activeFilter===filter
      })} 
      onClick={() => dispatch(setActiveFilter(filter))}
    >
      {filter}
      <span className={styles.count}>{filterTodos(filter).length}</span>
    </button>

  )
}

export default FilterItem
