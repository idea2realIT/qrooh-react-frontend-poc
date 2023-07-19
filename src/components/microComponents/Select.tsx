import { useSelect } from "downshift";
import { CustomButtonWithRef } from "components/microComponents/CustomButton";
import { IconType } from "react-icons";
import { FaAngleDown, FaAngleUp, FaRegCalendarDays } from "react-icons/fa6";
import styled from "styled-components";

// start of styled-components
const SelectContainer = styled.div`
  position: relative;
`;
const SelectButtonContainer = styled.div``;
interface OptionsListPropsTyps {
  isOpen: boolean;
}
const OptionsList = styled.ul<OptionsListPropsTyps>`
  position: absolute;
  right: 0;
  background: #d0e2cf;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  border-radius: 15px;
  padding: 0.5rem;
  margin-top: 5px;
`;
interface ListItemProps {
  index: number;
}
// border-top: ${(props) => (props.index ? "1px solid green" : "none")};
const ListItem = styled.li<ListItemProps>`
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  text-align: right;
  color: #355f44;
  font-weight: 700;
  transition: background 0.2s;
  &:hover {
    background: #ffffff;
  }
`;
// end of styled-components

const books = [
  { id: 0, value: "last 7 days" },
  { id: 1, value: "last 28 days" },
  { id: 2, value: "last 14 days" },
];
function itemToString(item: any) {
  return item ? item.value : "";
}

function Select({
  Icon,
  LightText,
  sx,
}: {
  Icon?: IconType;
  LightText?: string;
  sx?: Object;
}) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: books,
    itemToString,
    initialSelectedItem: books[0],
  });
  console.log(selectedItem ? selectedItem.id : null);
  return (
    <SelectContainer style={sx}>
      <SelectButtonContainer>
        <CustomButtonWithRef
          Icon={Icon}
          LightText={LightText}
          DarkText={selectedItem ? selectedItem.value : ""}
          AfterIcon={isOpen ? FaAngleUp : FaAngleDown}
          as="div"
          {...getToggleButtonProps()}
        />
      </SelectButtonContainer>
      <OptionsList isOpen={isOpen} {...getMenuProps()}>
        {isOpen &&
          books.map((item, index) => (
            <ListItem
              index={item.id}
              key={item.id}
              {...getItemProps({ item, index })}
            >
              <span>{item.value}</span>
            </ListItem>
          ))}
      </OptionsList>
    </SelectContainer>
  );
}

export default Select;
