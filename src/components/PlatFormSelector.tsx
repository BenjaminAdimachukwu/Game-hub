import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatForms from '../hooks/usePlatforms'

const PlatFormSelector = () => {
    const { data, error} = usePlatForms()
    if(error) return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>platforms</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem>{platform.name}</MenuItem>)}
            
        </MenuList>
    </Menu>
  )
}

export default PlatFormSelector