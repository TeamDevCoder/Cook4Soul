import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';


const navBar2 = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    const[navVisible, setNavVisible] = useState(false);

    const abrir = () => {
        setNavVisible(true);
      };
    
      const cerrar = () => {
        setNavVisible(false);
      };

      const handleReset = () =>{
        setNavVisible(false)
      }


  return (
    <div className='menu'>
                    <button className='menu__burger' onClick={abrir}><img src="/burger.svg" alt="" /></button>
                    <Link className='menu__logoMobileA' to="/"><img className='menu__logoMobile' src="/Logo.svg" alt="Logo" /></Link>
                    <nav className={`menu__nav ${navVisible ? 'visibleNav' : ''}${!navVisible ? 'cerrar':''}`}>
                    <div className='menuCont_Cerrar'>
                        <button className='menu__cerrar'onClick={cerrar}><img src="/flecha.svg" alt="" /></button>
                    </div>
                    <ul className='menu__navList'>
                        {windowWidth < 768 ? (
                        <>
                    <li className='menu_buttons'><Link onClick={handleReset} to="/productos">Productos</Link></li>
                    <li className='menu_buttons'><Link onClick={handleReset} to="/nosotros">Nosotros</Link></li>
                    <li className='menu_buttons'><Link onClick={handleReset} to="/contacto">Contacto</Link></li>
                    <li className='menu_buttons'><Link onClick={handleReset} to="/faqs">FAQ'S</Link></li>
                    <li className='btn-li'><Link onClick={handleReset} className='btn-contacto' to={`https://api.whatsapp.com/send?phone=34667873835&text=Hola`}target='blank'  ><svg className='imgContact' width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Atomo" clip-path="url(#clip0_338_10820)">
<path id="Vector" d="M1.20138 13.8327C1.20073 16.1852 1.81543 18.4823 2.98427 20.507L1.0896 27.4247L8.16904 25.5685C10.1271 26.6344 12.321 27.193 14.5504 27.1931H14.5563C21.9161 27.1931 27.9071 21.2043 27.9102 13.8432C27.9116 10.2762 26.5238 6.9221 24.0023 4.39862C21.4812 1.87537 18.1283 0.485026 14.5558 0.483398C7.19512 0.483398 1.20453 6.47193 1.20149 13.8327" fill="url(#paint0_linear_338_10820)"/>
<path id="Vector_2" d="M0.724645 13.8281C0.723885 16.2653 1.36061 18.6445 2.57113 20.7417L0.608521 27.9074L7.94181 25.9846C9.96237 27.0863 12.2373 27.6671 14.5522 27.668H14.5582C22.182 27.668 28.3882 21.4637 28.3915 13.8392C28.3928 10.144 26.955 6.66932 24.3434 4.05544C21.7315 1.44189 18.2586 0.00151938 14.5582 0C6.93305 0 0.727683 6.20341 0.724645 13.8281ZM5.09178 20.3805L4.81796 19.9459C3.66692 18.1157 3.05939 16.0007 3.06026 13.829C3.06275 7.49152 8.2204 2.3355 14.5625 2.3355C17.6338 2.33681 20.5202 3.53408 22.6912 5.70636C24.8621 7.87885 26.0566 10.7668 26.0559 13.8383C26.053 20.1757 20.8953 25.3324 14.5582 25.3324H14.5536C12.4902 25.3313 10.4665 24.7772 8.70161 23.73L8.28161 23.4809L3.92989 24.6219L5.09178 20.3804V20.3805Z" fill="url(#paint1_linear_338_10820)"/>
<path id="Vector_3" d="M11.1007 8.04716C10.8417 7.47164 10.5692 7.46003 10.323 7.44994C10.1213 7.44125 9.89082 7.44191 9.66053 7.44191C9.43001 7.44191 9.05549 7.52862 8.73891 7.87428C8.42201 8.22026 7.52905 9.05636 7.52905 10.7569C7.52905 12.4575 8.76767 14.1009 8.94034 14.3318C9.11322 14.5622 11.3315 18.1635 14.8448 19.549C17.7646 20.7003 18.3588 20.4713 18.9924 20.4136C19.6262 20.3561 21.0375 19.5777 21.3255 18.7706C21.6136 17.9636 21.6136 17.2719 21.5272 17.1273C21.4408 16.9833 21.2103 16.8968 20.8646 16.724C20.5189 16.5511 18.8196 15.7149 18.5028 15.5996C18.1859 15.4843 17.9555 15.4268 17.725 15.7729C17.4944 16.1184 16.8325 16.8968 16.6308 17.1273C16.4293 17.3584 16.2275 17.3871 15.882 17.2142C15.5361 17.0408 14.4229 16.6763 13.1022 15.4989C12.0747 14.5827 11.381 13.4513 11.1794 13.1052C10.9777 12.7596 11.1578 12.5723 11.3311 12.4001C11.4864 12.2452 11.6769 11.9965 11.8498 11.7947C12.0222 11.5929 12.0797 11.4488 12.195 11.2183C12.3103 10.9876 12.2526 10.7857 12.1663 10.6129C12.0797 10.44 11.408 8.73056 11.1007 8.04716Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_338_10820" x1="1342.12" y1="2694.62" x2="1342.12" y2="0.483398" gradientUnits="userSpaceOnUse">
<stop stop-color="#1FAF38"/>
<stop offset="1" stop-color="#60D669"/>
</linearGradient>
<linearGradient id="paint1_linear_338_10820" x1="1389.76" y1="2790.74" x2="1389.76" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9F9F9"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<clipPath id="clip0_338_10820">
<rect width="27.7829" height="28" fill="white" transform="translate(0.608521)"/>
</clipPath>
</defs>
</svg><p className='pContact'>Contáctanos</p></Link></li>
                    <li className='menu__logoSideBar'><img src="/LogoSideBar.svg" alt="Logo" /></li>
                    
                    </>
                    ): (
                        <>
                       <li className='menu_buttons'><Link to="/productos">Productos</Link></li>
                    <li className='menu_buttons'><Link to="/nosotros">Nosotros</Link></li>
                    <li className='menu__logoNavBar'><Link to="/"> <img src="/Logo.svg" alt="Logo" /></Link></li>
                    <li className='menu_buttons'><Link to="/contacto">Contacto</Link></li>
                    <li className='menu_buttons'><Link to="/faqs">FAQ'S</Link></li>
                    
                    </>)}
                </ul>
            </nav>
      
    </div>
  )
}

export default navBar2
