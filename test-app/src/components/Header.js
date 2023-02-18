import React from "react";
import Logo from "../assets/icons/logo_ico.svg";
import styled from "styled-components";
import LeftStain from "../assets/images/left-stain.svg";
import RightStain from "../assets/images/right-stain.svg";

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: center;
  position: relative;

  &:after {
    content: url(${LeftStain});
    position: absolute;
    top: 0;
    left: 0;
  }

  &:before {
    content: url(${RightStain});
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <a href="#">
        <img src={Logo} alt="company logo" />
      </a>
    </StyledHeader>
  );
};
