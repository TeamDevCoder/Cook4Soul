import React from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton, 
  } from '@chakra-ui/react';
  import {HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon} from "@chakra-ui/icons";
  

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
    <button type="button" class="btn btn-light Menu__bottons">Productos</button>
    <button type="button" class="btn btn-light Menu__bottons">Nosotros</button>
    <button type="button" class="btn btn-light Menu__bottons">Contacto</button>
    <button type="button" class="btn btn-light Menu__bottons">FAQ'S</button>
    {/* <div className='btn btn-secondary Menu__bottonContact'>
    <img className='logoContact' src="whatsapp.svg" alt="WhatsApp Logo" />
    <p className='bottonContact__text'>Contáctanos</p>
    </div> */}
    <button className='btn btn-secondary Menu__bottonContact'><img className='logoContact' src="whatsapp.svg" alt="WhatsApp Logo"></img>Contactanos</button>
    
    <div className='SideBarLogo'>
        <img src="/LogoSideBar.svg" alt=""/>
    </div>
    </div>
  </MenuList>
</Menu>
<div className='Menu__Logo'>
    <img className='imgMenu__Logo' src="./LogoNavBar.svg" alt="logoNavbar" />
</div>
</div>

  )
}

export default NavBar