import { createSelector } from '@reduxjs/toolkit'

export const todoListSelector = (state) => state.todos

// export const filterTodoByStatusSelector = (state) => state.filters.status

export const filterSelector = (state) => state.filters

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterSelector,
    (todos, filters) => {
        let new_todos = todos.filter(item => {
            switch (filters.status) {
                case 'Completed':
                    return item.name.indexOf(filters.search) > -1 && item.completed
                case 'Todo':
                    return item.name.indexOf(filters.search) > -1 && !item.completed
                default:
                    return item.name.toUpperCase().indexOf(filters.search.toUpperCase()) > -1
            }
        })

        if (filters.priority.length > 0) {
            new_todos = new_todos.filter(item => {
                return filters.priority.indexOf(item.priority) > -1
            })
        }

        return new_todos
    })