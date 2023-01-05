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
    const [taskElements, setTaskElements] = useState([])
    const [data, setData] = useState([])

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
                  />
              </div>
          )}
          {isVisible === "addTodo" && (
              <AddTodoComponent
                  setIsVisible={setIsVisible}
                  data={data}
                  setData={setData}
              />
          )}
          {isVisible === "deleteTodo" && (
              <DeleteTodoComponent
                  setIsVisible={setIsVisible}
                  data={data}
                  setData={setData}
              />
          )}
          {isVisible === "viewTodo" && (
              <ViewTodoComponent
                  setIsVisible={setIsVisible}
                  data={data}
                  setData={setData}
              />
          )}
      </div>
  )
}

export default App
