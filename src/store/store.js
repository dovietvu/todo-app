// import { createStore } from "redux";
// // import thunk from 'redux-thunk'
// import rootReducer from "./reducer";
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()
// const initValue = {}
// const store = createStore(
//     rootReducer,
//     initValue,
//     composedEnhancers
// )
// export default store

import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from '../components/Filters/filtersSlice'
import todoListSlice from '../components/TodoList/todoListSlice'

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todos: todoListSlice.reducer
    }
})

export default store