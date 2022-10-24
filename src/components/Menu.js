import React from "react";
import Info from "./Info";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import styled from "styled-components";
const Menu = ({ setStatus, status }) => {
  return (
    <MenuStyle>
      <div className="menu">
        <div className={`left-side-main ${status ? "left-side-show " : null}`}>
          <LeftSidebar />
        </div>

        <div
          onClick={() => {
            setStatus(false);
          }}
          className={`left-slide ${status ? "left-slide-back-show" : null}`}
        ></div>

        <Info />
        <RightSidebar />
      </div>
    </MenuStyle>
  );
};

const MenuStyle = styled.div`
  .menu {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }
  .left-side-main {
    position: sticky;
    top: 80px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 20px;
    height: 70vh;

    width: 20%;
    font-family: "Kumbh Sans", sans-serif;
  }
  @media screen and (max-width: 768px) {
    .left-slide {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: transparent;
      z-index: 550;
      display: none;
      transition: all 0.3s linear;
    }
    .left-slide-back-show {
      display: block !important;
      cursor: pointer;
    }
    .left-side-main {
      width: 0%;
      transition: all 0.3s linear;
      background-color: #fff;
      z-index: 555;
      display: none;
      height: auto;
    }
    .left-side-show {
      display: block;
      transition: all 0.3s linear;
      width: 100%;
      /* height: 30vh; */
      opacity: 1;
    }
    .menu {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      transition: all 0.3s linear;
    }
  }
`;
export default Menu;
