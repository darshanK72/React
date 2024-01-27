import { configureStore } from "@reduxjs/toolkit";
import localStorageMiddleware from "./middleware/storage";
import todoReducer from './todo/todo.slice';

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware:(defaultMiddleware) => defaultMiddleware().concat(localStorageMiddleware)
})

export default store;