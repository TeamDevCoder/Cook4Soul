import React from 'react'

const Home = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://telefe-static.akamaized.net/media/18201812/alfajor.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ytimg.com/vi/Jwqd_Dx46bc/hqdefault.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_4i10yr5otx_alfajores-de-maicena-1-juan-manuel-herrera-el-gourmet-1-1024x683.jpg.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        <main className='Home'>
                <h1 className='home__h1'>COOK 4 SOUL</h1>
                <h4 className='home__h4'>A taste of heaven in every bite</h4>
                <button className='btn btn-secondary home__bottonProds'>Ver productos</button>
                <p className='home__text'>Lee las reseñas de nuestros clientes y descubre que les gusta sobre nuestros productos</p>
                <section className='slider'>

                            <div className='slider-track'>
                                <div className='slide'>
                                    <img src="https://media.istockphoto.com/id/1180243264/es/foto/alfajores-argentinos-tradicionales.jpg?s=612x612&w=0&k=20&c=twBFtEiO9sf5wH9IkLQyoCZMNHw1pJHBHZ8HwzmZ14k=" alt="" />
                                </div> 
                                <div className='slide'>
                                    <img src="https://media.istockphoto.com/id/1180243264/es/foto/alfajores-argentinos-tradicionales.jpg?s=612x612&w=0&k=20&c=twBFtEiO9sf5wH9IkLQyoCZMNHw1pJHBHZ8HwzmZ14k=" alt="" />
                                </div> 
                                <div className='slide'>
                                    <img src="https://media.istockphoto.com/id/1180243264/es/foto/alfajores-argentinos-tradicionales.jpg?s=612x612&w=0&k=20&c=twBFtEiO9sf5wH9IkLQyoCZMNHw1pJHBHZ8HwzmZ14k=" alt="" />
                                </div> 
                                <div className='slide'>
                                    <img src="https://media.istockphoto.com/id/1180243264/es/foto/alfajores-argentinos-tradicionales.jpg?s=612x612&w=0&k=20&c=twBFtEiO9sf5wH9IkLQyoCZMNHw1pJHBHZ8HwzmZ14k=" alt="" />
                                </div>   
                                <div className='slide'>
                                    <img src="https://media.istockphoto.com/id/1180243264/es/foto/alfajores-argentinos-tradicionales.jpg?s=612x612&w=0&k=20&c=twBFtEiO9sf5wH9IkLQyoCZMNHw1pJHBHZ8HwzmZ14k=" alt="" />
                                </div> 
                                <div className='slide'>
                                    <img src="https://media.istockphoto.com/id/1180243264/es/foto/alfajores-argentinos-tradicionales.jpg?s=612x612&w=0&k=20&c=twBFtEiO9sf5wH9IkLQyoCZMNHw1pJHBHZ8HwzmZ14k=" alt="" />
                                </div> 
                                <div className='slide'>
                                    <img src="https://media.istockphoto.com/id/1180243264/es/foto/alfajores-argentinos-tradicionales.jpg?s=612x612&w=0&k=20&c=twBFtEiO9sf5wH9IkLQyoCZMNHw1pJHBHZ8HwzmZ14k=" alt="" />
                                </div> 
                                <div className='slide'>
                                    <img src="https://media.istockphoto.com/id/1180243264/es/foto/alfajores-argentinos-tradicionales.jpg?s=612x612&w=0&k=20&c=twBFtEiO9sf5wH9IkLQyoCZMNHw1pJHBHZ8HwzmZ14k=" alt="" />
                                </div>     
                            </div>
                        
                </section>
        </main>
      
    </div>



  )
}

export default Home
