import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import arrow from "../../assets/icons/arrow-right_ico.svg";
import { apiLink } from "../../constants/constants";
import { SET_POPUP_STATE, SET_RESPONSE_STATUS } from "../../redux/actions";

const StyledForm = styled.form`
  width: 22.9vw;
  height: 3.1vw;
  position: relative;
  margin-left: auto;

  @media (max-width: 1024px) {
    width: 36rem;
    height: 4rem;
    margin-left: 0;
  }

  @media (max-width: 500px) {
    width: 28rem;
  }
`;

const StyledInput = styled.input`
  padding: 0.8vw 1.5vw;
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 4rem;
  border: none;
  outline: none;
  font-family: "Roboto", sans-serif;
  font-size: 0.9vw;
  color: rgba(0, 0, 0, 0.6);

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
  }
`;

const StyledBtn = styled.button`
  background-color: #df2224;
  width: 2.2vw;
  height: 2.2vw;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.45vw;
  right: 0.4vw;
  transition: all 0.3s ease-out;

  img {
    width: 1vw;
    height: 1vw;
  }

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

const Error = styled.div`
  height: 3rem;
  color: #df2224;
  margin-top: 0.5rem;
  padding: 0 3rem;
  font-size: 1.2rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 0rem 2rem;
  }
`;

export const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    fetch(apiLink, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        dispatch(SET_RESPONSE_STATUS(true));
        dispatch(SET_POPUP_STATE(true));
      })
      .catch(() => {
        dispatch(SET_RESPONSE_STATUS(false));
        dispatch(SET_POPUP_STATE(true));
      });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Please type correct mail",
          },
        })}
        placeholder="Enter your Email and get notified"
      ></StyledInput>
      <Error>{errors?.email && errors?.email?.message}</Error>
      <StyledBtn type="submit">
        <img src={arrow} alt="send" />
      </StyledBtn>
    </StyledForm>
  );
};
