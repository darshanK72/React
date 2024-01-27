import { createSlice } from '@reduxjs/toolkit';


const initialState = JSON.parse(localStorage.getItem('todos')) || [];

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({...action.payload });
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => {
                if (todo.id == action.payload.id) return false
                else return true
            })
        },
        updateTodo: (state, action) => {
            return state.map((todo) => {
                if (todo.id == action.payload.id) return { ...todo, ...action.payload }
                else return todo
            })
        },
        markCompleted: (state, action) => {
            state.map((todo) => {
                if (todo.id == action.payload.id) todo.isCompleted = true;
            })
        },
        markIncomplete: (state, action) => {
            state.map((todo) => {
                if (todo.id == action.payload.id) todo.isCompleted = false;
            })
        }
    },

})

export const { addTodo, deleteTodo, updateTodo, markCompleted, markIncomplete } = todoSlice.actions;
export default todoSlice.reducer;