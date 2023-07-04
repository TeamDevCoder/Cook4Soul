import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const pid = parseInt(id)
  const [product, setProduct] = useState({});
  console.log(id, typeof(pid));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        const foundProduct = data.find((product) => product.id === pid);
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error al obtener los productos', error);
      }
    };
    fetchProduct();
  }, [id]);
  

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <aside className='d-flex ms-4 mt-2'>
        <Link to={`/`}>Inicio</Link>
        <Link className='ms-1' to={`/products`}>/ products</Link>
        <p className='ms-1'>/ {product.name}</p>
      </aside>
      <main className='prodcuts__main'>
        <section className='prodcuts__main__section'>
          <h1 className='prodcuts__main__section__h1'>{product.name}</h1>
          <p className='prodcuts__main__section__p'>{product.price}</p>
        </section>
        <p className='prodcuts__main__p'><span className='prodcuts__main__span'>Ingredientes</span>: {product.ingredientes}</p>
        <aside>
          iconos
        </aside>
        <div>
          <img width={360} className='ms-3' src={product.image} alt="" />
        </div>
        <p>Descripción: {product.description}</p>
      </main>
      
      <Link to="/products">Volver</Link>
    </>
  );
};

export default ProductDetails;
