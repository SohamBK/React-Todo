import {createSlice} from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem("react-redux-todos")) || [];

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.unshift({
                id: Date.now(),
                text: action.payload,
                completed: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.find((t) => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        }
    }
})

export const {addTodo, toggleTodo, deleteTodo} = todosSlice.actions;
export default todosSlice.reducer;