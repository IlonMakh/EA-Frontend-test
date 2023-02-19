import React from "react";
import styled from "styled-components";
import arrow from "../../assets/icons/arrow-right_ico.svg";

const StyledForm = styled.form`
  width: 44rem;
  height: 6rem;
  position: relative;

  @media (max-width: 1024px) {
    width: 36rem;
    height: 4rem;
  }

  @media (max-width: 500px) {
    width: 28rem;
  }
`;

const StyledInput = styled.input`
  padding: 1.6rem 3rem;
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 4rem;
  border: none;
  outline: none;
  font-family: "Roboto", sans-serif;
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.6);

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const StyledBtn = styled.button`
  background-color: #df2224;
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #162c4e;
  }

  @media (max-width: 1024px) {
    width: 3.3rem;
    height: 3.3rem;
    top: 0.4rem;
    right: 0.4rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const Form = () => {
  return (
    <StyledForm>
      <StyledInput placeholder="Enter your Email and get notified"></StyledInput>
      <StyledBtn>
        <img src={arrow} alt="send" />
      </StyledBtn>
    </StyledForm>
  );
};
