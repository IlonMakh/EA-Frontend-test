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
    width: 47rem;
    height: 41.4rem;
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
    width: 29.1rem;
    height: 41.2rem;
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
      width: 34rem;
      height: 30rem;
    }

    &:before {
      width: 25.1rem;
      height: 35.2rem;
    }
  }

  @media (max-width: 1024px) {
    &:after {
      width: 30rem;
      height: 26rem;
    }

    &:before {
      width: 22.1rem;
      height: 30.2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 10rem 0;

    &:after {
      width: 25rem;
      height: 22rem;
    }

    &:before {
      width: 25.1rem;
      height: 23.2rem;
    }
  }

  @media (max-width: 600px) {
    padding: 8rem 0 6rem;
    &:after {
      width: 17.6rem;
      height: 16rem;
    }

    &:before {
      width: 15.4rem;
      height: 15rem;
    }
  }

  @media (max-width: 500px) {
    .header_logo {
      width: 12.8rem;
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
