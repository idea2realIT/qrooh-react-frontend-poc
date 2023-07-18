import React, {
  ComponentPropsWithRef,
  PropsWithChildren,
  ReactNode,
  ReactPropTypes,
} from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import styled from "styled-components";

const FormSubmitButtonStyle = styled.button`
  border: none;
  margin-top: 2rem;
  height: 3.6rem;
  background: #59b947;
  border-radius: 16px;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  position: relative;
  color: white;
  cursor: pointer;
`;
const FormSubmitButtonIconContainer = styled.span`
  position: absolute;
  right: 2rem;
  top: 30%;
`;
function FormSubmitButton(props: ComponentPropsWithRef<"button">) {
  return (
    <FormSubmitButtonStyle {...props}>
      {props.children}
      <FormSubmitButtonIconContainer>
        <FaArrowRightToBracket />
      </FormSubmitButtonIconContainer>
    </FormSubmitButtonStyle>
  );
}

export default FormSubmitButton;
