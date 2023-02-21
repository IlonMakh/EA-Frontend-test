import React from "react";
import styled from "styled-components";
import { Form } from "./Form";
import DownArrow from "../../assets/icons/arrow-down_ico.svg";
import { useDispatch } from "react-redux";
import { SET_BLOCK_STATE } from "../../redux/actions";

const StyledFooter = styled.footer`
  padding: 3.1vw 5.7vw 3.5vw;
  background-color: #162c4e;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .more_btn {
    font-size: 1vw;
    text-transform: capitalize;
    padding: 0.5vw;
    background: transparent;
    text-decoration: none;
    cursor: pointer;
    color: white;
    position: relative;
    transition: all 1s ease-out;
    margin-left: auto;
  }

  .more_btn:hover {
    transform: translate(0, 20%);
  }

  .more_btn:after {
    content: "";
    background: no-repeat center/contain url(${DownArrow});
    position: absolute;
    top: 0.5vw;
    right: -1vw;
    width: 1.25vw;
    height: 1.25vw;
  }

  @media (max-width: 1024px) {
    padding: 6rem 0;
    gap: 1.5rem;
    flex-direction: column;

    .more_btn {
      font-size: 1.6rem;
      margin-left: 0;
    }

    .more_btn:after {
      top: 0.9rem;
      right: -2rem;
      width: 1.6rem;
      height: 1.6rem;
    }
  }
  }

  @media (max-width: 600px) {
    padding: 5rem 0;
  }
`;

export const Footer = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(SET_BLOCK_STATE(true));
  };
  return (
    <StyledFooter>
      <Form />
      <a href="#events" onClick={clickHandler} className="more_btn">
        other events
      </a>
    </StyledFooter>
  );
};
