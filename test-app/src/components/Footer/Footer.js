import React from "react";
import styled from "styled-components";
import { Form } from "./Form";
import DownArrow from "../../assets/icons/arrow-down_ico.svg";
import { useDispatch } from "react-redux";
import { SET_BLOCK_STATE } from "../../redux/actions";

const StyledFooter = styled.footer`
  padding: 6rem 11rem 7rem;
  background-color: #162c4e;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .more_btn {
    font-size: 2rem;
    text-transform: capitalize;
    padding: 1rem;
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
    content: url(${DownArrow});
    position: absolute;
    top: 1rem;
    right: -2rem;
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
      top: 0.7rem;
      right: -1rem;
      width: 1.6rem;
      height: 1.6rem;
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
