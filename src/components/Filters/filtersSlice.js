import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
    status: 'All',
    priority: []
}

export default createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterTodoAction: (state, action) => {
            state.search = action.payload
        },
        filterTodoByStatusAction: (state, action) => {
            state.status = action.payload
        },
        filterByPriority: (state, action) => {
            state.priority = action.payload
        },
    }
})

// const filtersReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filter_todo':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filter_with_status':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filter_with_priority':
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default:
//             return state
//     }
// }

// export default filtersReducer