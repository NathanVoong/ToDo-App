export function DeleteTodoComponent({setIsVisible}) {
    return (
        <div>
            <h1>Delete todo page!</h1>
            <button onClick={() => setIsVisible("home")}>
                home
            </button>
        </div>
    )
}