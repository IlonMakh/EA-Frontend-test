import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sheet from "../../assets/images/sheet.svg";

const data = [
  {
    measure: "Days",
    short: "DD",
    amount: "92",
  },

  {
    measure: "Hours",
    short: "HH",
    amount: "11",
  },

  {
    measure: "Minutes",
    short: "MM",
    amount: "41",
  },

  {
    measure: "Seconds",
    short: "SS",
    amount: "48",
  },
];

const StyledTimer = styled.div`
  display: flex;
  margin-bottom: 7rem;

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

export const Timer = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    window.onresize = () => {
      setScreenWidth(window.screen.width);
    };
    return () => (window.onresize = false);
  }, [screenWidth]);

  return (
    <StyledTimer>
      {data.map((item, index) => {
        return (
          <>
            <TimerItem key={item.measure}>
              <div className="timer-amount">{item.amount}</div>
              <div className="timer-measure">
                {screenWidth <= 1024 ? item.short : item.measure}
              </div>
            </TimerItem>
            {index !== data.length - 1 ? <StyledSpan>:</StyledSpan> : ""}
          </>
        );
      })}
    </StyledTimer>
  );
};
