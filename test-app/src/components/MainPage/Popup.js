import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CloseIco from "../../assets/icons/close_ico.svg";
import { SET_POPUP_STATE } from "../../redux/actions";
import { store } from "../../redux/store";

const PopupWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(22, 44, 78, 0.6);
  z-index: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPopup = styled.div`
  width: 32rem;
  height: 37rem;
  z-index: 5;
  background: white;
  border-radius: 0.2rem;
  padding: 0 2rem;
  cursor: default;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  position: relative;

  .popup_result {
    color: #162c4e;
    font-family: "Poppins-Bold", sans-serif;
    font-size: 3.6rem;
    line-height: 100%;
    text-transform: uppercase;
  }

  .popup_description {
    font-size: 1.6rem;
    line-height: 150%;
    text-align: center;
  }
`;

const CloseBtn = styled.button`
  width: 20rem;
  height: 6rem;
  padding: 1.6rem 0;
  color: white;
  background: #1d4169;
  border-radius: 4rem;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  text-align: center;
`;

const CrossBtn = styled.button`
  width: 5rem;
  height: 5rem;
  border: none;
  background: no-repeat center / cover url(${CloseIco});
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Popup = () => {
  const global = store.getState().rootReducer;
  const dispatch = useDispatch();

  function closePopup(event) {
    const target = event.target;
    if (
      target.classList.contains("popup_wrapper") ||
      target.classList.contains("popup_close")
    ) {
      dispatch(SET_POPUP_STATE(false));
    }
  }

  return (
    <PopupWrapper className="popup_wrapper" onClick={closePopup}>
      <StyledPopup>
        <h5 className="popup_result">
          {global.isResponseOk ? "Success!" : "Error!"}
        </h5>
        <p className="popup_description">
          {global.isResponseOk
            ? "You have successfully subscribed to the email newsletter"
            : "Something goes wrong, try again later"}
        </p>
        <CloseBtn className="popup_close" onClick={closePopup}>
          Close
        </CloseBtn>
        <CrossBtn className="popup_close" onClick={closePopup} />
      </StyledPopup>
    </PopupWrapper>
  );
};
