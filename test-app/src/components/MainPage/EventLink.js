import React from "react";
import styled from "styled-components";
import arrow from "../../assets/icons/arrow-right_ico.svg";

const LinkWrapper = styled.div`
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .event-text {
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.8rem;
    line-height: 150%;
  }
`;

const LinkBtn = styled.button`
  width: 24rem;
  height: 6rem;
  padding: 1.6rem 3rem;
  color: white;
  background: #1d4169;
  border-radius: 4rem;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  text-align: left;
  position: relative;

  &:after {
    content: url(${arrow});
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

export const EventLink = () => {
  return (
    <LinkWrapper>
      <p className="event-text">Check our event page when you wait:</p>
      <a href="https://egorovagency.by/#main">
        <LinkBtn>Go to the event</LinkBtn>
      </a>
    </LinkWrapper>
  );
};
