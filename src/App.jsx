import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import ProductDetails from './components/ProductsDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
