import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <HStack padding='8px'>
      <Link to='/'>
        <Image src={logo} boxSize='60px' objectFit='cover'/>
      </Link>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar