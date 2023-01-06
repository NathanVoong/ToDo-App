import { useState } from 'react'
import './App.css'
import {LoginComponent} from "./lib/componentLogin.jsx";
import {HomeComponent} from "./lib/componentHome.jsx";
import {AddTodoComponent} from "./lib/componentAddTodo.jsx";
import {DeleteTodoComponent} from "./lib/componentDeleteTodo.jsx";
import {ViewTodoComponent} from "./lib/componentViewTodo.jsx";

function App() {
    const [isVisible, setIsVisible] = useState("login")
    const [user, setUser] = useState("")
    const [todos, setTodos] = useState([])

  return (
      <div>
          {isVisible === "login" && (
              <LoginComponent
                  setIsVisible={setIsVisible}
                  setUser={setUser}
              />
          )}
          {isVisible === "home" && (
              <div>
                  <HomeComponent
                      user={user}
                      setIsVisible={setIsVisible}
                      todos={todos}
                  />
              </div>
          )}
          {isVisible === "addTodo" && (
              <AddTodoComponent
                  setIsVisible={setIsVisible}
                  todos={todos}
                  setTodos={setTodos}
              />
          )}
          {isVisible === "deleteTodo" && (
              <DeleteTodoComponent
                  setIsVisible={setIsVisible}
                  todos={todos}
                  setTodos={setTodos}
              />
          )}
          {isVisible === "viewTodo" && (
              <ViewTodoComponent
                  setIsVisible={setIsVisible}
                  todos={todos}
                  setTodos={setTodos}
              />
          )}
      </div>
  )
}

export default App
