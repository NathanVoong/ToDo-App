export function ViewTodoComponent({setIsVisible}) {
    return (
        <div>
            <h1>View Todo Page!</h1>
            <button onClick={() => setIsVisible("home")}>
                home
            </button>
        </div>
    )
}