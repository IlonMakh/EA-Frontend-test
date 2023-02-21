import React from "react";
import Logo from "../assets/icons/logo_ico.svg";
import styled from "styled-components";
import LeftStain from "../assets/images/left-stain.svg";
import RightStain from "../assets/images/right-stain.svg";

const StyledHeader = styled.header`
  padding: 6rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  transition: all 0.35s ease-out;
  transform: translate(0, -50%);
  opacity: 0;

  &:after {
    content: "";
    background: no-repeat center / cover url(${LeftStain});
    position: absolute;
    top: 0;
    left: 0;
    width: 24.5vw;
    height: 21.5vw;
    opacity: 0;
    transition: all 0.35s 0.95s ease-out;
    transform: translate(-50%, -50%);
  }

  &:before {
    content: "";
    background: no-repeat center / cover url(${RightStain});
    position: absolute;
    top: 0;
    right: 0;
    width: 15.1vw;
    height: 21.4vw;
    opacity: 0;
    transition: all 0.35s 0.95s ease-out;
    transform: translate(50%, -50%);
  }

  .header_logo {
    transition: all 1s ease-out;
  }

  .header_logo:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    &:after {
      width: 28vw;
      height: 25vw;
    }

    &:before {
      width: 20.9vw;
      height: 29vw;
    }
  }

  @media (max-width: 1024px) {

    &:after {
      width: 29vw;
      height: 25vw;
    }

    &:before {
      width: 21vw;
      height: 29vw;
    }
  }

  @media (max-width: 768px) {
    padding: 13vw 0;

    .header_logo {
      width: 12.8rem;
    }

    &:after {
      width: 32.5vw;
      height: 28vw;
    }

    &:before {
      width: 32.6vw;
      height: 30.2vw;
    }
  }

  @media (max-width: 600px) {
    padding: 22vw 0 16.6vw;
    &:after {
      width: 48vw;
      height: 44vw;
    }

    &:before {
      width: 41.7vw;
      height: 41.6vw;
    }
  }

  @media (max-width: 500px) {
    .header_logo {
      width: 35vw;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader className="animate">
      <a href={window.location.href}>
        <img className="header_logo" src={Logo} alt="company logo" />
      </a>
    </StyledHeader>
  );
};
