import {useState} from "react";
import { v4 as uuid } from "uuid";

export function AddTodoComponent({setIsVisible, todos, setTodos}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div>
            <h3>Enter a task name</h3>
            <form onSubmit={(event) => {
                event.preventDefault();
                if (!title || !description) {
                    setIsVisible("home")
                    return;
                }
                setTodos([...todos, {id:uuid(), title,description}])
                setIsVisible("home")
            }}>
                <label>
                    Title:
                    <input type="text" name="name" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="email" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Priority:
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}