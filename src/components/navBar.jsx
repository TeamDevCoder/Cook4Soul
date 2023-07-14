import React, { useState } from 'react'

import { Link } from 'react-router-dom';


const navBar2 = () => {

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
                    <img className='menu__logoMobile' src="/LogoNavBar.svg" alt="Logo" />
                    <nav className={`menu__nav ${navVisible ? 'visible' : ''}`}>
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
                    <li className='btn btn-secondary btn-li'><Link className='btn-contacto'  to='#'><img className='imgContact' src="/whatsapp.svg" alt="" /><p className='pContact'>Contactanos</p></Link></li>
                    <li className='menu__logo'><img src="/LogoSideBar.svg" alt="Logo" /></li>
                    
                    </>
                    ): (
                        <>
                       <li className='menu_buttons'><Link to="/Products">Productos</Link></li>
                    <li className='menu_buttons'><Link to="/Nosotros">Nosotros</Link></li>
                    <li className='menu__logo'><a href=""> <img src="/LogoNavBar.svg" alt="Logo" /></a></li>
                    <li className='menu_buttons'><Link to="/Contacto">Contacto</Link></li>
                    <li className='menu_buttons'><Link to="/Faqs">FAQ'S</Link></li>
                    
                    </>)}
                </ul>
            </nav>
      
    </div>
  )
}

export default navBar2
