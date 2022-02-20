import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        name: 'Viec 1',
        completed: false,
        priority: 'Medium'
    },
    {
        id: 2,
        name: 'Viec 2',
        completed: true,
        priority: 'Low'
    },
]

export default createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodoAction: (state, action) => {
            state.push(action.payload)
        },
        toogleTodoStatus: (state, action) => {
            let currentTodo = state.find(item => item.id === action.payload)
            if (currentTodo) currentTodo.completed = !currentTodo.completed
        },
    }
})

// const todoListReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'add_todo':
//             return [...state, action.payload]
//         case 'update_completed':
//             return state.map(item => String(item.id) === String(action.payload) ? { ...item, completed: !item.completed } : item)
//         default:
//             return state
//     }
// }

// export default todoListReducer