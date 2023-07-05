import NavBar from "./components/navBar";
import './app.css'
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>

      <Route exact path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      
  )
}

export default App
