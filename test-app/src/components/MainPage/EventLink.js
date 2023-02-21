import React from "react";
import styled from "styled-components";
import arrow from "../../assets/icons/arrow-right_ico.svg";

const LinkWrapper = styled.div`
  margin-bottom: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  opacity: 0;
  transition: all 0.35s 0.95s ease-out;
  transform: translate(0, -50%);

  .event-text {
    text-align: center;
    font-size: 0.9vw;
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

const LinkBtn = styled.a`
  display: block;
  width: 12.5vw;
  height: 3.1vw;
  padding: 0.8vw 1.5vw;
  color: white;
  background: #1d4169;
  border-radius: 4rem;
  border: none;
  font-size: 0.9vw;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  position: relative;
  transition: all 1s ease-out;

  &:hover {
    padding: 0.8vw 2.5vw;
  }

  &:after {
    content: '';
    background: no-repeat center/contain url(${arrow});
    position: absolute;
    width: 1vw;
    height: 1vw;
    top: 1vw;
    right: 1vw;
  }

  @media (max-width: 1024px) {
    width: 24rem;
    height: 6rem;
    padding: 1.6rem 3rem;
    font-size: 1.8rem;

    &:hover {
      padding: 1.6rem 5.5rem;
    }

    &:after {
      width: 2rem;
      height: 2rem;
      top: 2rem;
      right: 2rem;
    }
`;

export const EventLink = () => {
  return (
    <LinkWrapper className="animate">
      <p className="event-text">Check our event page when you wait:</p>
      <LinkBtn
        target="_blank"
        rel="noreferrer"
        href="https://egorovagency.by/#main"
      >
        Go to the event
      </LinkBtn>
    </LinkWrapper>
  );
};
