import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import ProductDetails from './components/ProductsDetails';


function App() {
<<<<<<< HEAD
=======
  

>>>>>>> 6603f030e4b0e02bfed52e50258a1acfaa29455b
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
>>>>>>> gabriel
  )
}

export default App
