import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet'
const Home = () => {
        const consultReview = async()=>{
            try {
                const response = await fetch('./resena.json')
                const data = await response.json();
                return data
            } catch (error) {
                console.log("Error en consultReview",error);
            }

        }
        const [review, setReview] = useState([]);
        console.log(review);

        useEffect(()=>{
                consultReview().then((rev)=>{setReview(rev)})
        }, [])


  return (
    <div>
        <Helmet>
        <title> Home - Cook4Soul</title>
      <meta name='keywords' content='alfajores veganos, alfajores veganos en España, España, alfajores argentinos, alfajores sanos en Madrid, alfajores, saludable, veggie, Madrid, alfajores sin TACC, SIN TACC'/>
      <meta name='description' content='pastelería vegana, Elaboramos productos 100% 
      artesanales y naturales, libres de lactosa y azúcares añadidos. utilizamos ingredientes veganos y orgánicos de gran calidad' />
        </Helmet>
        <div id="carouselExampleAutoplaying" className="carousel slide carousel_Slide" data-bs-ride="true">
  <div className="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active " data-bs-interval="3000">
      <img src="/Carrousel.png" className="d-block w-100 carousel carousel-img zoom" alt="..."/>
    </div>
    <div className="carousel-item " data-bs-interval="3000">
      <img src="/Carrousel2.png" className="d-block w-100 carousel carousel-img zoom" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000" >
      <img  src="/Carrousel3.png" className="d-block w-100 carousel carousel-img zoom" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        <main className='Home'>

                <section className='Home__Section'>
                <h1 className='home__h1'><img src="/Logo.svg" alt="" /></h1>
                <h4 className='home__h4'>A taste of heaven in every bite</h4>
                <button className=' home__bottonProds'><Link to="/productos">Ver productos</Link></button>
                </section>
                <p className='home__text'>Lee las reseñas de nuestros clientes y descubre que les gusta sobre nuestros productos</p>
                
                <section className='slider'>

                            <div className='slider-track'>
                
                                    {review.map((rev)=>(
                                            
                                        <div className='HomeSlide' key={rev.id}>
                                                <p className='slider__Reviewid'>{rev.id}</p>
                                                <div className='sliderCont1'>
                                                <div className='avatarContainer'>
                                                  <img className='avatar' src="/AvatarReviews.svg" /></div>
                                                    <div className='sliderCont2'>
                                                        <p className='slider__name'>{rev.name}</p>
                                                        <div className='slider__Img'>
                                                            <img className='slider__star' src="/Estrella.svg" alt="" />
                                                            <img className='slider__star' src="/Estrella.svg" alt="" />
                                                            <img className='slider__star' src="/Estrella.svg" alt="" />
                                                            <img className='slider__star' src="/Estrella.svg" alt="" />
                                                            <img className='slider__star' src="/Estrella.svg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <p className='slider__review'>"{rev.review}"</p>
                                                </div>
                                    ))}
                                    {review.map((rev)=>(
                                        <div key={rev.id} className='HomeSlide'>
                                                <p className='slider__Reviewid'>{rev.id}</p>
                                                <div className='sliderCont1'>
                                                      <div className='avatarContainer'><img className='avatar' src="/AvatarReviews.svg" /></div>
                                                    <div className='sliderCont2'>
                                                        <p className='slider__name'>{rev.name}</p>
                                                        <div className='slider__Img'>
                                                            <img  className='slider__star' src="/Estrella.svg" alt="" />
                                                            <img  className='slider__star' src="/Estrella.svg" alt="" />
                                                            <img  className='slider__star' src="/Estrella.svg" alt="" />
                                                            <img  className='slider__star' src="/Estrella.svg" alt="" />
                                                            <img  className='slider__star' src="/Estrella.svg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                                
                                                <p className='slider__review'>"{rev.review}"</p>
                                        </div>
                                                
                                    ))}
                                 
                            </div>
                        
                </section>
        </main>
      
    </div>



  )
}

export default Home