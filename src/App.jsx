import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import ProductDetails from './components/ProductsDetails';
import NavBar from "./components/navBar";
import './app.css'
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

      
  )
}

export default App
