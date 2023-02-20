import React, { useRef } from "react";
import styled from "styled-components";
import { accordionItems } from "../../constants/constants";
import { addZero } from "../../utils/addZero";
import { Event } from "./Event";

const StyledAccordion = styled.div`
  width: 88vw;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EventAccordion = () => {
  const accordion = useRef();
  return (
    <StyledAccordion ref={accordion}>
      {accordionItems.map((item, index) => {
        return (
          <Event
            key={item.name}
            parent={accordion}
            item={item}
            num={addZero(index + 1)}
          />
        );
      })}
    </StyledAccordion>
  );
};
