import { useState } from 'react'
import './App.css'
import {LoginComponent} from "./lib/componentLogin.jsx";
import {HomeComponent} from "./lib/componentHome.jsx";


function App() {
    const [isVisible, setIsVisible] = useState("login")
    const [user, setUser] = useState("")
  return (
      <div>
          {isVisible === "login" && (
              <LoginComponent
                  setIsVisible={setIsVisible}
                  setUser={setUser}
              />
          )}
          {isVisible === "home" && (
              <HomeComponent
                  user={user}
                  setIsVisible={setIsVisible}
              />
          )}
      </div>
  )
}

export default App
