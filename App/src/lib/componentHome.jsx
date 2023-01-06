import React from 'react';

export function HomeComponent({user, setIsVisible, todos}) {
    console.log({todos})
    return (
        <div>
            <h1>Welcome {user}!</h1>
            <form>
                {todos.map(todo =>
                    <div>
                        <input type="checkbox" id={todo.id} />
                        {todo.title} - {todo.description}
                    </div>
                )}
            </form>
            <p>
                <button onClick={() => setIsVisible("addTodo")}>
                    Add Todos
                </button>
                <button onClick={() => setIsVisible("deleteTodo")}>
                    Delete Todos
                </button>
                <p>
                    <button onClick={() => setIsVisible("viewTodo")}>
                        View Todos
                    </button>
                </p>
            </p>
        </div>
    )
}

