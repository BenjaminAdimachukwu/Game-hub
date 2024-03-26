import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";


const SortSelector = () => {
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
  const setSortOrder = useGameQueryStore(s => s.setSortOrder)
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Dated added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOder = sortOrders.find((order) => order.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* {sortOrder ? sortOrder : "Order by: Relevance"} */}
        Order by: {currentSortOder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => setSortOrder(sortOrder.value)}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
