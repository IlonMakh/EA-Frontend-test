import React, { useEffect } from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { Timer } from "../components/MainPage/Timer";
import styled from "styled-components";
import { InfoBlock } from "../components/MainPage/InfoBlock";
import { EventLink } from "../components/MainPage/EventLink";
import { overDateTimestamp } from "../constants/constants";
import { Popup } from "../components/MainPage/Popup";
import { useSelector } from "react-redux";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainPage = () => {
  const global = useSelector((state) => state.rootReducer);
  useEffect(() => {}, [global]);
  return (
    <>
      <Header />
      <MainWrapper>
        <InfoBlock />
        <Timer overDateTimestamp={overDateTimestamp} />
        <EventLink />
      </MainWrapper>
      {global.isPopupOpen && <Popup />}
      <Footer />
    </>
  );
};
