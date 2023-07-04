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
    <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
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