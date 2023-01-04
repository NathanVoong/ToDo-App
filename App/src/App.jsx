import { useState } from 'react'
import './App.css'
import {LoginComponent} from "./lib/componentLogin.jsx";
import {HomeComponent} from "./lib/componentHome.jsx";
import {FeaturesComponent} from "./lib/componentFeatures.jsx";
import {AddTodoComponent} from "./lib/componentAddTodo.jsx";

function App() {
    const [isVisible, setIsVisible] = useState("login")
    const [user, setUser] = useState("")
    const [taskElements, setTaskElements] = useState([])
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
                  <FeaturesComponent
                      setIsVisible={setIsVisible}
                  />
              </div>
          )}
          {isVisible === "addTodo" && (
              <AddTodoComponent
                  //setIsVisible={setIsVisible}
              />
          )}
      </div>
  )
}

export default App
