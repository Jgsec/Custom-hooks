import React from "react";
import useTodos from "../hooks/useTodos";

const initialTodos = [
    { id: 1, title: 'Exportar logica a custom hook' },
    { id: 2, title: 'Reutilizar custom hook' }
]

const CustomTodoApp = () => {
    
    const [todos, addTodo, deleteTodo] = useTodos(initialTodos);

    return (
        <div>
            <h2>Lista de tareas con useTodos</h2>
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

export default CustomTodoApp;