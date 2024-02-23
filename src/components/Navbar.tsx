import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
const Navbar = () => {
  return (
    <HStack  padding='8px'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar