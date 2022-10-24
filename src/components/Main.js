import React, { useState } from "react";
import "../styles/Main.css";
import Menu from "./Menu";
import Navbar from "./Navbar";
import styled from "styled-components";
const Main = () => {
  const [status, setStatus] = useState(false);

  return (
    <Wrapper>
      <Navbar setStatus={setStatus} />
      <Menu status={status} setStatus={setStatus} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    overflow-x: hidden;
  }
`;

export default Main;

