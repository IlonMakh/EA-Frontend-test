import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sheet from "../../assets/images/sheet.svg";
import { measures } from "../../constants/constants";
import { convertTime } from "../../utils/convertTime";

const StyledTimer = styled.div`
  display: flex;
  margin-bottom: 7rem;
  opacity: 0;
  transition: all 0.35s 0.75s ease-out;
  transform: translate(0, -50%);

  @media (max-width: 1024px) {
    margin-bottom: 4rem;
  }
`;

const StyledSpan = styled.span`
  font-family: "Poppins-Semibold", sans-serif;
  font-size: 7.2rem;
  color: #162c4e;
  line-height: 100%;

  @media (max-width: 1024px) {
    font-size: 3.6rem;
  }
`;

const TimerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
  width: 13rem;
  height: 13rem;

  .timer-amount {
    font-family: "Poppins-Semibold", sans-serif;
    font-size: 7.2rem;
    color: #162c4e;
    line-height: 100%;
  }

  .timer-measure {
    width: 100%;
    padding: 2rem 0;
    font-size: 1.6rem;
    color: white;
    text-transform: capitalize;
    background: no-repeat center / contain url(${Sheet});
  }

  @media (max-width: 1024px) {
    width: 6.4rem;
    height: 8.2rem;
    .timer-amount {
      font-size: 3.6rem;
    }

    .timer-measure {
      padding: 1.4rem 0;
      font-size: 1.2rem;
    }
  }
`;

export const Timer = ({ overDateTimestamp }) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [time, setTime] = useState(convertTime(overDateTimestamp));

  function updateTime(timestamp) {
    setTime(convertTime(timestamp));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime(overDateTimestamp);
    }, 1000);

    window.onresize = () => {
      setScreenWidth(window.screen.width);
    };

    return () => {
      clearInterval(intervalId);
      window.onresize = false;
    };
  }, [overDateTimestamp, screenWidth]);

  return (
    <StyledTimer className="animate">
      {measures.map((item, index) => {
        return (
          <React.Fragment key={item.measure}>
            <TimerItem>
              <div className="timer-amount">{time[item.measure]}</div>
              <div className="timer-measure">
                {screenWidth <= 1024 ? item.short : item.measure}
              </div>
            </TimerItem>
            {index !== measures.length - 1 ? <StyledSpan>:</StyledSpan> : ""}
          </React.Fragment>
        );
      })}
    </StyledTimer>
  );
};
