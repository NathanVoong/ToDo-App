import {useState} from "react";

export function LoginComponent({setIsVisible, setUser}) {
    const [text, setText] = useState("")
    return (
        <div>
            <h1>Enter your name</h1>
            <form onSubmit={(event) => {event.preventDefault();setUser(text);setIsVisible("home")}}>
                <input
                    placeholder="Enter your input..."
                    onChange={(event) => setText(event.target.value)}
                />
                <h3>{text}</h3>
            </form>
        </div>
    )
}