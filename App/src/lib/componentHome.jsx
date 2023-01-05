import React from 'react';

export function HomeComponent({user, setIsVisible}) {
    return (
        <div>
            <h1>Welcome {user}!</h1>
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

