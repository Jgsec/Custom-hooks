import React, { useState } from "react";

const initialTodos = [
    { id: 1, title: 'Exportar logica a custom hook' },
    { id: 2, title: 'Reutilizar custom hook' }
]

const TodoApp = () => {

    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (newTodo) => {
        newTodo.id = todos[todos.length-1].id + 1;
        setTodos([
            ...todos,
            newTodo
        ])
    };

    const deleteTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id != todoId));
    }

    return (
        <div>
            <h2>Lista de tareas con useState</h2>
            <button onClick={() => addTodo({title : prompt("Dame un titulo de tarea")})}>Nueva tarea</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default TodoApp;