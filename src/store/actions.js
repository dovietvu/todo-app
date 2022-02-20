export const addTodoAction = (object) => {
    return {
        type: 'add_todo',
        payload: object
    }
}

export const filterTodoAction = (keyword) => {
    return {
        type: 'filter_todo',
        payload: keyword
    }
}

export const filterTodoByStatusAction = (status) => {
    return {
        type: 'filter_with_status',
        payload: status
    }
}

export const filterByPriority = (prioriry) => {
    return {
        type: 'filter_with_priority',
        payload: prioriry
    }
}

export const toogleTodoStatus = (id) => {
    return {
        type: 'update_completed',
        payload: id
    }
}
