import {useContext, createContext, useReducer, useEffect} from 'react';
import { todoReducer } from './todoReducer';

const TodoContext = createContext()
const LOCAL_STORAGE_KEY = "react-todo-list";

export const TodoProvider = ({children}) => {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const localDate = localStorage.getItem(LOCAL_STORAGE_KEY);
        return localDate ? JSON.parse(localDate) : [];
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => dispatch({type: "ADD_TODO", payload: text});
    const toggleComplete = (id) => dispatch({ type: "TOGGLE_TODO", payload: id });
    const deleteTodo = (id) => dispatch({ type: "DELETE_TODO", payload: id });

    return (
        <TodoContext.Provider value = {{todos, addTodo, toggleComplete, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    );
};

//custom hook
export const useTodos = () => useContext(TodoContext);