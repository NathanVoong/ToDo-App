import React from "react";

export function ViewTodoComponent({setIsVisible, todos}) {
    return (
        <div>
            <h1>View Todo Page!</h1>
            <button onClick={() => setIsVisible("home")}>
                home
            </button>
            <form>
                {todos.map(todo =>
                    <div>
                        <input type="checkbox" id={todo.id} />
                        {todo.title} - {todo.description}
                    </div>
                )}
            </form>
        </div>
    )
}