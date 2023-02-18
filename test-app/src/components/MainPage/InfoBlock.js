import React from "react";
import styled from "styled-components";

const InfoWrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .info-title {
    color: #a4adba;
    font-family: "Poppins-Bold", sans-serif;
    font-size: 7.2rem;
    line-height: 100%;
    text-transform: uppercase;
  }

  .info-text {
    font-size: 1.8rem;
    line-height: 100%;
    text-align: center;
  }
`;

export const InfoBlock = () => {
  return (
    <InfoWrapper>
      <h1 className="info-title">Under Construction</h1>
      <p className="info-text">
        We're making lots of improvements and will be
        <br />
        back soon
      </p>
    </InfoWrapper>
  );
};
