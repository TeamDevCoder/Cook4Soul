import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Aboutus = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
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
  return (
    <>
    <aside className='d-flex ruta'>
        <Link className='ruta__link' to={`/`}>Inicio</Link>
        <p className='ms-1'>/ Nosortos</p>
    </aside>
    <h1 className='quienesSomos'>¿Quiénes somos?</h1>
    <section className='aboutus__section'>
        <img className='aboutus__section__img animate-animated animate-bounceInRight' src="/Card.jpg" alt="banner de alfajores de cook for soul" />
        <div className='aboutus__section__div'>
            <h2 className='aboutus__section__div__h2'>Cook4Soul surge de la idea de tres emprendedores apasionados por la cocina, la naturaleza y la protección del medio ambiente.</h2>
            <p className='aboutus__section__div__p'>Nuestro objetivo es transmitir a través de la cocina alternativas que contribuyan a hacer del mundo un lugar mejor, sin renunciar al placer de saborear deliciosos platillos. Somos una pastelería vegana que deleitará tu paladar y nutrirá tu alma.<br></br><br></br>
            Elaboramos productos 100% artesanales y naturales, libres de lactosa y azúcares añadidos.<br></br><br></br>
            En cada receta, utilizamos ingredientes veganos y orgánicos de la más alta calidad, combinados con una amplia variedad de frutas tropicales como papaya, limón, maracuyá, coco y lúcuma. Seleccionamos cuidadosamente estos ingredientes para garantizar su frescura y sabor excepcional. Además, el chocolate puro es el complemento perfecto para coronar nuestras creaciones.<br></br><br></br>
            Nuestro propósito es hacer que comer de manera saludable sea delicioso y lleno de sabores. Queremos que cada bocado sea un disfrute consciente, sabiendo que cuidas de tu bienestar y del planeta. Con Cook4Soul, descubrirás una experiencia culinaria que alimenta tu cuerpo y tu espíritu.<br></br><br></br> Únete a nosotros en esta apasionante búsqueda de "cocinar para el alma"</p>
        </div>
    </section>
    <main className='aboutus__main'>
        <div className='aboutus__main__card presentation'>
            <img className={`aboutus__main__img presentation__img ${windowWidth >= 1024 ? 'wow animate__backInLeft' : ''}`} src={windowWidth < 768 ? "/Fotografia.jpg" : "Card (1).jpg"} alt="foto de franco brignolo sonriente, salpicado con harina, levantando los brazos y sosteniendo un bol de metal plateado en su mano derecha" />
            <div className={`aboutus__main__div presentation__div ${windowWidth >= 1024 ? "wow animate__backInRight" : ""} `}>
                <h2 className='aboutus__main__div__h2 presentation__div__h2'>Franco Brignolio</h2>
                <p className='aboutus__main__div__pcursive presentation__div__pcursive'>Generando un puente cultural deliciosamente innovador, entre bits y dulzuras!</p>
                <p className='aboutus__main__div__p presentation__div__p'>Soy Franco, un argentino lleno de energía y entusiasmo. Soy ingeniero en telecomunicaciones de profesión, pero mi verdadera pasión está en la cocina.  ¡Sí, soy un cocinero apasionado listo para conquistar sus paladares! El más hablador del grupo, y puedo hablar sin parar todo el día. Me encanta emprender en la cocina. ¡Ven y únete a mi aventura culinaria, donde la diversión y la buena comida están garantizadas!</p>
                <p className='aboutus__main__div__phashtag presentation__div__phashtag'>#VeganPastry #healthybaking #FuncyNerd #Argentina</p>
            </div>
        </div>
        <div className='aboutus__main__card presentationReverse'>
            <img className={` aboutus__main__img presentationReverse__img ${windowWidth >= 1024 ? "wow animate__backInRight" : ""} `} src={windowWidth < 768? "/Fotografia (1).jpg" : "/Card (2).jpg"} alt="foto de franco brignolo sonriente, salpicado con harina, levantando los brazos y sosteniendo un bol de metal plateado en su mano derecha" />
            <div className={`aboutus__main__div presentationReverse__div ${windowWidth >=1024 ? " wow animate__backInLeft" : ""}`}>
                <h2 className='aboutus__main__div__h2 presentationReverse__div__h2'>Javier Pantó</h2>
                <p className='aboutus__main__div__pcursive presentationReverse__div__pcursive'>El chef encuentra su magia al amar a quienes cocina</p>
                <p className='aboutus__main__div__p presentationReverse__div__p '>Soy Javi, Italo-Venozolano que mezcla la pasión por la filosofía con el arte de la pastelería. Soy el científico de la cocina, siempre experimentando con sabores y texturas para crear dulces deliciosos y sorprendentes. Mi objetivo es llevarte en un viaje gastronómico lleno de emociones y despertar tus sentidos. ¡Prepárate para deleitarte con mis creaciones únicas y disfrutar de momentos llenos de dulzura y alegría!</p>
                <p className='aboutus__main__div__phashtag presentationReverse__div__phashtag'>#VeganPastry #healthybaking #cheffscience #naturelover </p>
            </div>
        </div>
        <div className='aboutus__main__card presentation div__hil'>
            <img className={`aboutus__main__img presentation__img ${windowWidth >= 1024 ? 'wow animate__backInLeft' : ''}`} src={windowWidth < 768 ?"/Fotografia (2).jpg" : "/Card (3).jpg"} alt="foto de franco brignolo sonriente, salpicado con harina, levantando los brazos y sosteniendo un bol de metal plateado en su mano derecha" />
            <div className={`aboutus__main__div presentation__div ${windowWidth >= 1024 ? "wow animate__backInRight" : ""} `}>
                <h2 className='aboutus__main__div__h2 presentation__div__h2'>Hilda Galvéz</h2>
                <p className='aboutus__main__div__pcursive presentation__div__pcursive'>La matemática detrás de la nueva forma de endulzar tu vida</p>
                <p className='aboutus__main__div__p presentation__div__pcursive'>Soy Hil, peruana con una pasión desbordante por los números y los sabores del mundo. Como administradora de empresas, tengo el increíble privilegio de organizar y administrar nuestra empresa, asegurándome de que todo funcione a la perfección. Tengo un talento especial para probar recetas, garantizando que cada bocado sea una experiencia inolvidable.  ¡Descubramos juntos los sabores más sorprendentes y exquisitos que nuestra empresa tiene para ofrecer!</p>
                <p className='aboutus__main__div__phashtag presentation__div__phashtag'>#VeganPastry #healthybaking #Sibarita #lovenumbers</p>
            </div>
        </div>
        
    </main>
    </>
  )
}

export default Aboutus