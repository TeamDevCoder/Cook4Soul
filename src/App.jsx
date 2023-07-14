import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import ProductDetails from './components/ProductsDetails';
import Faqss from './components/Faqss';
import Wpp from './components/Wpp';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';


function App() {

  return (

      
      
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path="/ProductDetail/:id" element={<ProductsDetailContainer/>}/>
        <Route exact path='/faqs' element={<Faqss/>}/>
        <Route exact path='/aboutus' element={<Aboutus/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      <Wpp></Wpp>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
