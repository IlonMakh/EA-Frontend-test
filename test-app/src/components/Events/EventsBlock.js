import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { EventAccordion } from "./EventAccordion";

const StyledEvents = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  gap: 4rem;

  .events_title {
    color: #a4adba;
    font-family: "Poppins-Bold", sans-serif;
    font-size: 7.2rem;
    line-height: 100%;
    text-transform: uppercase;
    text-align: center;
  }

  @media (max-width: 1024px) {
    padding:5rem 0;
    gap: 2rem;

    .events_title {
      font-size: 3.6rem;
    }
  }

`;

export const EventsBlock = () => {
  const global = useSelector((state) => state.rootReducer);
  return (
    <StyledEvents id="events" isOpen={global.isBlockOpen}>
      <h2 className="events_title">All events</h2>
      <EventAccordion />
    </StyledEvents>
  );
};
