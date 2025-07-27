import React from 'react'

function TodoList({todos, onRemove}) {
    if (todos.length === 0) {
        return <p className="text-center text-grey-500">No todos yet!</p>
    }
    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className='flex justify-between items-center p-2 border rounded-md'
                >
                    <span>{todo.text}</span>
                    <button
                        onClick={() => onRemove(todo.id)}
                        className="text-red-500 hover:text-red-700 font-bold"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
