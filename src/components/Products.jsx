import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        // Agregar la propiedad "view" a cada elemento del array
        const productsWithView = data.map((product) => ({
          ...product,
          view: false
        }));
        setProducts(productsWithView);
      } catch (error) {
        console.error('Error al buscar los productos', error);
      }
    };
    fetchProducts();
  }, []);
  const handleClick = (index) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product, i) => {
        if (i === index) {
          return {
            ...product,
            view: !product.view
          };
        }
        return product;
      });
    });
  };
  return (
    <>
      <aside className='d-flex ms-4 mt-2'>
        <Link to={`/`}>Inicio</Link>
        <p className='ms-1'>/ products</p>
      </aside>
      <main className='Products__main'>
        <h1 className=' products'>Productos</h1>
        {products.map((product, index) => (
          <div
            onClick={() => handleClick(index)}
            className='products__main__div d-flex flex-column'
            key={product.id}
          >
            <img className={`products__main__div__img mt-4 ${product.view ? 'blur-image' : 'blur-image-none'}`} src={product.image} alt={product.name} />
            {product.view ? <Link className='link-button' to={`/products/${product.id}`}> <button className= {` ${product.view ? 'products__main__div__button': 'products__main__div__button__false' }`}>Ver producto</button> </Link>: null}
            <div className='products__main__div__img__div'>
              <h3 className='products__main__div__h3'>{product.name}</h3>
              <p className='products__main__div__p'>{product.price}</p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Products;
