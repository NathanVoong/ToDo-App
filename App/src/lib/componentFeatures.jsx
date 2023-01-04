export function FeaturesComponent({setIsVisible}) {
    return (
        <div>
            <button onClick={() => setIsVisible("addTodo")}>
                Add Todo
            </button>
        </div>
    )
}