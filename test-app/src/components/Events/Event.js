import React from "react";
import styled from "styled-components";

const StyledEvent = styled.div`
  width: 4.5vw;
  height: 35.5vw;
  background: no-repeat center/cover url(${(props) => props.img});
  display: flex;
  gap: 0;
  color: #F5F5F5;
  border-bottom: 0.2rem solid #FF1E00;
  transition: width 1.5s ease;

  &._active {
    width: 56vw;
  }

  &._active .cover {
    background-color: #162c4e;
    backdrop-filter: none;
  }

  .cover {
    width: 4.5vw;
    height: 100%;
    border: 0.1rem solid #F5F5F5;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding 1vw 0;
    gap: 2vw;
    cursor: pointer;
    background: linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%);
    backdrop-filter: grayscale(90%);
    transition: all 1.5s ease;
  }

  .cover_title {
    font-size: 1.6vw;
    font-family: "SF-Pro-Semibold", sans-serif;
    transform: rotate(-90deg);
    white-space: nowrap;
    line-height: 100%;
    width: 100%;
  }

  .cover_num {
    font-size: 2vw;
    font-family: 'SF-Pro-Medium', sans-serif;
    line-height: 100%;
  }

  .blur {
    opacity: 0;
    width: 0;
  }

  &._active .blur {
    width: 18.7vw;
    opacity: 1;
    height: 100%;
    background: rgba(18, 18, 18, 0.8);
    backdrop-filter: blur(2rem);
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-end;
    padding 2.6vw 2vw;
    overflow:hidden;
    position: relative;
  }

  &._active .blur:after {
    content: '${(props) => props.num}';
    font-size: 20vw;
    font-family: "SF-Pro-Semibold", sans-serif;
    color: rgba(255, 255, 255, 0.04);
    position: absolute;
    letter-spacing: -5%;
    top:-10%;
    right:25%;
  }

  &._active .blur_name {
    font-family: 'SF-Pro-Semibold';
    font-size: 1.25vw;
    line-height: 120%;
    margin-bottom: 0.5vw;
    width: 13vw;
  }

  &._active .blur_date {
    font-family: 'SF-Pro';
    font-size: 0.9vw;
    line-height: 150%;
    margin-bottom: 1.3vw;
  }

  .blur_btn {
    display: none;
  }

  &._active .blur_btn {
    display:block;
    font-family: 'SF-Pro';
    font-size: 0.9vw;
    color:#F5F5F5;
    border: 0.1vw solid #F5F5F5;
    background-color: transparent;
    border-left: 0.4vw solid #F5F5F5;
    text-decoration: none;
    padding: 1vw 2.6vw;
    width: 13.3vw;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 11vw;
    flex-direction: column;
    justify-content: flex-end;
    transition: height 1.5s ease;

    &._active {
      height: 100vw;
      width: 100%;
    }

    .cover {
      width: 100%;
      height: 11vw;
      flex-direction: row;
      align-items: center;
      justify-content: left;
      padding: 0 4rem;
      background: linear-gradient(270deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%);
    }

    .cover_title {
      transform: rotate(0deg);
      font-size: 3.1vw;
    }
  
    .cover_num {
      order:-1;
      font-size: 4.1vw;
    }

    .blur {
      opacity: 0;
      width: 100%;
      height: 0;
      order: -1;
    }
  
    &._active .blur {
      width: 100%;
      opacity: 1;
      height: 25vw;
      flex-direction: column;
      align-items: left;
      justify-content: flex-start;
      padding 2.5rem 4rem;
    }

    &._active .blur:after {
      font-size: 22vw;
      top:-10%;
      right:-5%;
    }
  
    &._active .blur_name {
      font-size: 2.3vw;
      margin-bottom: 1.3vw;
      width: fit-content;
    }
  
    &._active .blur_date {
      font-size: 2vw;
      margin-bottom: 3.9vw;
    }
  
    &._active .blur_btn {
      font-size: 2vw;
      padding: 1.2rem 2.4rem;
      width: fit-content;
      border-left: 0.6rem solid #F5F5F5;
    }
  }

  @media (max-width: 500px) {
    height: 17.7vw;

    &._active {
      height: 104vw;
    }

    .cover {
      height: 17.7vw;
      padding: 0 2rem;
    }

    .cover_title {
      font-size: 4.7vw;
    }
  
    .cover_num {
      font-size: 6.3vw;
    }
  
    &._active .blur {
      height: 43.8vw;
      padding 2.4rem 2.2rem;
    }
  
    &._active .blur_name {
      font-size: 4.4vw;
      margin-bottom: 2.2vw;
    }
  
    &._active .blur_date {
      font-size: 3.8vw;
      margin-bottom: 6.1vw;
    }
  
    &._active .blur_btn {
      font-size: 4.4vw;
    }
  }
`;

export const Event = (props) => {
  const clickHandler = (event) => {
    Array.from(props.parent.current.children).forEach((item) => {
      if (item.classList.contains("_active")) {
        item.classList.remove("_active");
      }
    });
    event.currentTarget.classList.add("_active");
  };

  return (
    <StyledEvent
      className={props.num === "01" ? "_active" : ""}
      num={props.num}
      img={props.item.photo}
      onClick={clickHandler}
    >
      <div className="cover">
        <h4 className="cover_title">{props.item.name}</h4>
        <h4 className="cover_num">{props.num}</h4>
      </div>
      <div className="blur">
        <div className="blur_name">{props.item.name}</div>
        <div className="blur_date">{props.item.date}</div>
        <a
          className="blur_btn"
          target="_blank"
          rel="noreferrer"
          href="https://egorovagency.by/#main"
        >
          More information
        </a>
      </div>
    </StyledEvent>
  );
};
