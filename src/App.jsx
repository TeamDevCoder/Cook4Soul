import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import ProductsDetailContainer from './components/ProductsDetailContainer';
import Faqss from './components/Faqss';
import Wpp from './components/Wpp';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import NavBar2 from "./components/navBar"
import Home from "./components/Home"


function App() {

  return (

      
      
    <BrowserRouter>
      <header className="header">
    <NavBar2/>
      </header>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/productos' element={<Products/>}/>
        <Route exact path="/product-detail/:id" element={<ProductsDetailContainer/>}/>
        <Route exact path='/faqs' element={<Faqss/>}/>
        <Route exact path='/nosotros' element={<Aboutus/>}/>
        <Route exact path='/contacto' element={<Contact/>}/>
      </Routes>
      <Wpp></Wpp>
      <Footer></Footer>
    </BrowserRouter>

  )
}

export default App
