import React, { useEffect, useState } from 'react'
import CarouselPrdDetails from './carouselPrdDetails';
import GaleryPrdDetails from './GaleryPrdDetails';

const ProducsDetail = ({data}) => {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);

    // Ejecutar el handleResize una vez para obtener el tamaño inicial de la pantalla
    handleResize();

    // Limpiar el evento del listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className='prodsDetails'>
        
        {/* <div className='guia'><p>products/productsDetails</p></div> */}
        <div className='prodsDetails-cat'>
            <div className='detailsDiv1'>
                <p className='detailsDiv1__cat'>Categoría: {data.category}</p>
                    <div className='detailsDiv2'>
                        <p className='detailsDiv2__name'>{data.name}</p>
                        <p className='detailsDiv2__precio'>{data.price}</p>
                    </div>
                
            </div>
            <p className='prodsDetails__ingredientes'>Ingredientes: {data.ingredientes}</p>
            

            <div className='prodsDetails__icons'>
              <div className='prodsDetails__icons-img'><img src="/hoja.svg" alt="icon Hoja" />vegano</div>
              <div className='prodsDetails__icons-img'><img src="/vaca.svg" alt="Icon vaca" />sin lactosa</div>
              <div className='prodsDetails__icons-img'><img src="/saludable.svg" alt="icon Saludable" />saludable</div>
          </div>
        </div>
                <>
                  { screenSize.width <= 768 ?(
                    <CarouselPrdDetails data={data}/>
                  ):
                  <GaleryPrdDetails data={data}/>

                  }
                </>
       

      <section className='prdDetails'>
      <h4>Descripción</h4>
          <p className='prodsDetails__p'>
          {data.description}
        </p>
        </section>
        <button className='prdDetails_btn'> <img src="whatsapp.svg" alt="" />Hace tu pedido</button>
    </div>
    </>
  )
}

export default ProducsDetail
