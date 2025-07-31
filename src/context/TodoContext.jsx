import {useContext, createContext, useState, useEffect} from 'react';

const TodoContext = createContext()

const LOCAL_STORAGE_KEY = "react-todo-list";

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        }
        setTodos([newTodo, ...todos]);
    };

    const toggleComplete = (id) => {
        setTodos((prev) => 
            prev.map((todo) => 
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContext.Provider value = {{todos, addTodo, toggleComplete, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    );
};

//custom hook
export const useTodos = () => useContext(TodoContext);