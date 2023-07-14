import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMouseEnter = (index) => {
    
    setProducts((prevProducts) => {
      return prevProducts.map((product, i) => {
        if (i === index) {
          return {
            ...product,
            hovered: true
          };
        }
        return product;
      });
    });
  };
  const handleMouseLeave = (index) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product, i) => {
        if (i === index) {
          return {
            ...product,
            hovered: false
          };
        }
        return product;
      });
    });
  };


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Limpia el evento del listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div>
      <aside className='d-flex ruta'>
        <Link className='ruta__link' to={`/`}>Inicio</Link>
        <p className='ms-1'>/ productos</p>
      </aside>
      <main className='products__main'>
        <h1 className=' products'>Productos</h1>
        <div className='products__main__contenedor'>
        {products.map((product, index) => (
          <div
            onClick={() => handleClick(index)}
            className='products__main__div d-flex flex-column'
            key={product.id}
          >{windowWidth < 768 ?
          <img className={`products__main__div__img mt-4 ${product.view ? 'blur-image' : 'blur-image-none'}`} src={product.image_1} alt={product.name} /> : (windowWidth >= 768 && windowWidth < 1024 ?
            <img className={`products__main__div__img mt-4 ${product.view ? 'blur-image opacity' : 'blur-image-none opacity1'}`} src={product.view? product.image_2 : product.image_1} alt={product.name} /> : (windowWidth >= 1024 ? 
            <img className={`products__main__div__img mt-4 ${product.hovered ? 'hover-on' : 'hover-off'}`} 
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)} src={product.hovered ? product.image_2 : product.image_1} alt={product.name} /> : <></>))}

            {windowWidth >= 1024 ?
            <Link className={product.hovered ? "link-hover" : "link-hover-none"} to={`/product-detail/${product.id}`}> <button onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} className={product.hovered ? "hover" : "hover-none" }>Ver producto</button> </Link> : 
            (product.view ? <Link className='link-button' to={`/product-detail/${product.id}`}> <button className= {` ${product.view ? 'products__main__div__button': 'products__main__div__button__false' }`}>Ver producto</button> </Link>: null)}
            <div className={product.hovered ? "products__main__div__img__div-on" : "products__main__div__img__div"}>
              <h3 className='products__main__div__h3'>{product.name}</h3>
              <p className='products__main__div__p'>{product.price}</p>
            </div>
          </div>
        ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
