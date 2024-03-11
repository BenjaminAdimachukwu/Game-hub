import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForms from "../hooks/usePlatForms";
interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface Props {
  onSelectPlatForm: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatFormSelector = ({ onSelectPlatForm, selectedPlatform }: Props) => {
  const { data, error } = usePlatForms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatForm(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
