import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import ProductDetails from './components/ProductsDetails';
import Faqss from './components/Faqss';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path='/products/:id' element={<ProductDetails/>}/>
        <Route exact path='/faqs' element={<Faqss/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
