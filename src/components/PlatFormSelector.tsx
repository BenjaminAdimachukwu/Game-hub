import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForms from "../hooks/usePlatForms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const PlatFormSelector = () => {
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)
  const { data, error } = usePlatForms();
  if (error) return null;
  const selectedPlatform = usePlatform(selectedPlatformId)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
