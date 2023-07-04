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
    <Menu className="Menu">
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />

    <MenuItem>
        <img src="./LogoNavBar.svg" alt="logoNavbar" />
    </MenuItem>
  
  <MenuList>
    <MenuItem>
      Productos
    </MenuItem>
    <MenuItem>
      Nosotros
    </MenuItem>
    <MenuItem>
      Contacto
    </MenuItem>
    <MenuItem >
      FAQ's
    </MenuItem>
  </MenuList>
</Menu>

  )
}

export default NavBar