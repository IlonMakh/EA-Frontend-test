import React from "react";
import styled from "styled-components";
import { Form } from "./Form";

const StyledFooter = styled.footer`
  padding: 6rem 0 7rem;
  background-color: #162c4e;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media (max-width: 600px) {
    padding: 5rem 0;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Form />
    </StyledFooter>
  );
};
