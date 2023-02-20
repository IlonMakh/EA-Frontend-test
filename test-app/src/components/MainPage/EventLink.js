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
  opacity: 0;
  transition: all 0.35s 0.95s ease-out;
  transform: translate(0, -50%);

  .event-text {
    text-align: center;
    font-size: 1.8rem;
    line-height: 150%;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
    .event-text {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
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
  transition: all 1s ease-out;

  &:hover {
    padding: 1.6rem 5.5rem;
  }

  &:after {
    content: url(${arrow});
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

export const EventLink = () => {
  return (
    <LinkWrapper className="animate">
      <p className="event-text">Check our event page when you wait:</p>
      <a target="_blank" rel="noreferrer" href="https://egorovagency.by/#main">
        <LinkBtn>Go to the event</LinkBtn>
      </a>
    </LinkWrapper>
  );
};
