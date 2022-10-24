import React, { useState } from "react";
import styled from "styled-components";
import { InfoData } from "../json/InfoData";

const RightSidebar = () => {
  const [value, setValue] = useState(InfoData);
  return (
    <Wrapper>
      <div className="rightSidebar">
        <p className="right-title">Contents</p>
        <ul>
          {value.map((item, index) => {
            return (
              <li key={index}>
                <a href="#">{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 20%;

  .rightSidebar {
    position: sticky;
    top: 80px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 20px;
    height: 80vh;
    border-left: 0.5px solid #dedede;
    width: 100%;
    font-family: "Kumbh Sans", sans-serif;
  }
  .right-title {
    font-size: 20px;
    color: #454545;
    margin-left: 10px;
  }
  ul li a {
    font-size: 16px;
    color: #919191;
    font-weight: 400;

    font-style: normal;
    display: flex;
    text-align: left;
    margin-left: 0px;
    text-decoration: none;
    width: 100%;
  }
  ul li {
    list-style: none;
  }

  ul li a:hover {
    text-decoration: none;
    color: #5b86e1;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
    height: 100%;
    .rightSidebar {
      width: 90%;
      overflow: hidden;
      height: 100%;
    }
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export default RightSidebar;
