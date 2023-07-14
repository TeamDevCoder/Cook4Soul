import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';


const navBar2 = () => {

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

    const[navVisible, setNavVisible] = useState(false);

    const abrir = () => {
        setNavVisible(true);
      };
    
      const cerrar = () => {
        setNavVisible(false);
      };


  return (
    <div className='menu'>
                    <button className='menu__burger' onClick={abrir}><img src="/burger.svg" alt="" /></button>
                    <Link className='menu__logoMobileA' to="/"><img className='menu__logoMobile' src="/Logo.svg" alt="Logo" /></Link>
                    <nav className={`menu__nav ${navVisible ? 'visible' : ''}${!navVisible ? 'cerrar':''}`}>
                    <div className='menuCont_Cerrar'>
                        <button className='menu__cerrar'onClick={cerrar}><img src="/flecha.svg" alt="" /></button>
                    </div>
                    <ul className='menu__navList'>
                        {navVisible ? (
                        <>
                    <li className='menu_buttons'><Link to="/Products">Productos</Link></li>
                    <li className='menu_buttons'><Link to="/Nosotros">Nosotros</Link></li>
                    <li className='menu_buttons'><Link to="/Contacto">Contacto</Link></li>
                    <li className='menu_buttons'><Link to="/Faqs">FAQ'S</Link></li>
                    <li className='btn-li'><Link className='btn-contacto'  to='#'><img className='imgContact' src="/whatsapp.svg" alt="" /><p className='pContact'>Contáctanos</p></Link></li>
                    <li className='menu__logoSideBar'><img src="/LogoSideBar.svg" alt="Logo" /></li>
                    
                    </>
                    ): (
                        <>
                       <li className='menu_buttons'><Link to="/Products">Productos</Link></li>
                    <li className='menu_buttons'><Link to="/Nosotros">Nosotros</Link></li>
                    <li className='menu__logoNavBar'><Link to="/"> <img src="/Logo.svg" alt="Logo" /></Link></li>
                    <li className='menu_buttons'><Link to="/Contacto">Contacto</Link></li>
                    <li className='menu_buttons'><Link to="/Faqs">FAQ'S</Link></li>
                    
                    </>)}
                </ul>
            </nav>
      
    </div>
  )
}

export default navBar2
