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
    font-size: 7.2rem;
    line-height: 100%;
    text-transform: uppercase;
    text-align: center;
  }

  .info-text {
    font-size: 1.8rem;
    line-height: 150%;
    text-align: center;
    width: 42rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 4rem;
    gap: 2rem;

    .info-title {
      font-size: 3.6rem;
    }
    .info-text {
      font-size: 1.6rem;
      width: 29rem;
    }
  }

  @media (max-width: 500px) {
    .info-title {
      width: 40rem;
    }
  }

  @media (max-width: 440px) {
    .info-title {
      width: 30rem;
    }
  }
`;

export const InfoBlock = () => {
  return (
    <InfoWrapper className="animate">
      <h2 className="info-title">
        Under Construction
      </h2>
      <p className="info-text">
        We're making lots of improvements and will be back soon
      </p>
    </InfoWrapper>
  );
};
