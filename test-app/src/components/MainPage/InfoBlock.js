import React from "react";
import styled from "styled-components";

const InfoWrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transform: translate(0, -50%);
  opacity: 0;
  transition: all 0.35s 0.55s ease-out;

  .info-title {
    color: #a4adba;
    font-family: "Poppins-Bold", sans-serif;
    font-size: 3.75vw;
    line-height: 100%;
    text-transform: uppercase;
    text-align: center;
  }

  .info-text {
    font-size: 0.9vw;
    line-height: 150%;
    text-align: center;
    width: 21.8vw;
  }

  @media (max-width: 1024px) {
    margin-bottom: 4rem;
    gap: 2.6vw;

    .info-title {
      font-size: 3.6rem;
    }
    .info-text {
      font-size: 1.6rem;
      width: 28.5rem;
    }
  }

  @media (max-width: 500px) {
    .info-title {
      width: 32rem;
    }
  }
`;

export const InfoBlock = () => {
  return (
    <InfoWrapper className="animate">
      <h2 className="info-title">Under Construction</h2>
      <p className="info-text">
        We're making lots of improvements and will be back soon
      </p>
    </InfoWrapper>
  );
};
