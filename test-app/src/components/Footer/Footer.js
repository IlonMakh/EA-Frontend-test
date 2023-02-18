import React from "react";
import styled from "styled-components";
import { Form } from "./Form";

const StyledFooter = styled.footer`
  padding: 6rem 0 7rem;
  background-color: #162c4e;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Form />
    </StyledFooter>
  );
};
