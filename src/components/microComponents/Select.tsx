import { useSelect } from "downshift";
import { CustomButtonWithRef } from "components/microComponents/CustomButton";
import { IconType } from "react-icons";
import { FaAngleDown, FaAngleUp, FaRegCalendarDays } from "react-icons/fa6";
import styled from "styled-components";
import { useEffect } from "react";

// start of styled-components
const SelectContainer = styled.div`
  position: relative;
`;
const SelectButtonContainer = styled.div``;
interface OptionsListPropsTyps {
  open: boolean;
}
const OptionsList = styled.ul<OptionsListPropsTyps>`
  position: absolute;
  right: 0;
  background: #d0e2cf;
  display: ${(props) => (props.open ? "block" : "none")};
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
  white-space: nowrap;
  &:hover {
    background: #ffffff;
  }
`;
// end of styled-components
interface optionType {
  id: number;
  value: string;
}

function itemToString(item: any) {
  return item ? item.value : "";
}

function Select({
  Icon,
  LightText,
  sx,
  onChange,
  options,
}: {
  Icon?: IconType;
  LightText?: string;
  sx?: Object;
  onChange: (item: optionType | null) => void;
  options: optionType[];
}) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    items: options,
    itemToString,
    initialSelectedItem: options[0],
  });
  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem, onChange]);
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
      <OptionsList open={isOpen} {...getMenuProps()}>
        {isOpen &&
          options.map((item, index) => (
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
