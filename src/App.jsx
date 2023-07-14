import NavBar from "./components/navBar";
import './app.css'
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsDetailContainer from "./components/ProductsDetailContainer";

function App() {

  return (
    <div>
      <BrowserRouter>
      <header className="header">
      <NavBar/>
      </header>
      <Routes>

      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/ProductDetail/:id" element={<ProductsDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      
  )
}

export default App
