import React from "react";
import styled from "styled-components";
import Sheet from "../../assets/images/sheet.svg";

const data = [
  {
    measure: "Days",
    amount: "92",
  },

  {
    measure: "Hours",
    amount: "11",
  },

  {
    measure: "Minutes",
    amount: "41",
  },

  {
    measure: "Seconds",
    amount: "48",
  },
];

const StyledTimer = styled.div`
  display: flex;
  margin-bottom: 7rem;
`;

const StyledSpan = styled.span`
  font-family: "Poppins-Semibold", sans-serif;
  font-size: 7.2rem;
  color: #162c4e;
  line-height: 100%;
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
    background: no-repeat center / cover url(${Sheet});
  }
`;

export const Timer = () => {
  return (
    <StyledTimer>
      {data.map((item, index) => {
        return (
          <>
            <TimerItem key={item.measure}>
              <div className="timer-amount">{item.amount}</div>
              <div className="timer-measure">{item.measure}</div>
            </TimerItem>
            {index !== data.length - 1 ? <StyledSpan>:</StyledSpan> : ""}
          </>
        );
      })}
    </StyledTimer>
  );
};
