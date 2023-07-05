import React from 'react'
import { Link } from "react-router-dom";
import {
    Menu,
    MenuButton,
    MenuList,
    IconButton,
  } from '@chakra-ui/react';
  import {HamburgerIcon} from "@chakra-ui/icons";
  

const NavBar = () => {
  return (
    <div className='Menu'>
    <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />

  <MenuList>
    <div className='MenuListContainer'>
    
    <Link to="/Products"><button type="button" class="btn btn-light Menu__bottons">Productos</button></Link>
    
    <Link to="/Nosotros">
    <button type="button" class="btn btn-light Menu__bottons">Nosotros</button>
    </Link>
    <Link to="/Contacto">
    <button type="button" class="btn btn-light Menu__bottons">Contacto</button>
    </Link>
    <Link to="/Faq's">
    <button type="button" class="btn btn-light Menu__bottons">FAQ'S</button>
    </Link>
    <Link to="/#">
    <button className='btn btn-secondary Menu__bottonContact'><img className='logoContact' src="whatsapp.svg" alt="WhatsApp Logo"></img>Contactanos</button>
    </Link>
    <div className='SideBarLogo'>
        <img src="/LogoSideBar.svg" alt="Logo del sideBar"/>
    </div>
    </div>
  </MenuList>
</Menu>
<Link to="/">
<div className='Menu__Logo'>
    <img className='imgMenu__Logo' src="./LogoNavBar.svg" alt="logoNavbar" />
</div>
</Link>
</div>

  )
}

export default NavBar