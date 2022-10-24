import { useState } from "react";
import styled from "styled-components";
import data from "../json/data";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchSection from "./SearchSection";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const LeftSidebar = () => {
  const [arr, SetArr] = useState(data);
  //   dropdown

  const [name, setName] = React.useState("Cat in the Hat");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Wrapper>
      <div className="leftSidebar">
        <input
          className="search-input"
          type="text"
          name=""
          placeholder="Search"
        />

        {arr.map((item, id) => (
          <Accordion className="faq-name " key={id}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography className="title">{item.name}</Typography>
            </AccordionSummary>
            {item.children.map((element, id) => {
              return (
                <AccordionDetails typeof="number" id="typeBorder" key={id}>
                  <Typography
                    className="item"
                    id="typeBorder"
                    style={{ boxshadow: "none" }}
                  >
                    <span> {element.id}. </span>
                    {element.name}
                  </Typography>
                </AccordionDetails>
              );
            })}
          </Accordion>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  .leftSidebar {
    position: sticky;
    top: 80px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 20px;
    height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    font-family: "Kumbh Sans", sans-serif;
    transition: all 0.3s linear;
  }
  .logo {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .logo img {
    width: 80px;
  }

  .title {
    color: #757575;
    font-size: 18px;
    transition: all 0.3s linear;
    /* margin: 15px; */
  }

  .MuiAccordionSummary-content {
    border: none !important;
    box-shadow: none !important;
  }
  .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    border: none !important;
    box-shadow: none !important;
  }

  .css-1elwnq4-MuiPaper-root-MuiAccordion-root:before {
    position: absolute !important;
    top: -1px !important;
    border: none !important;
    box-shadow: none !important;
    visibility: hidden;
  }

  .item {
    transition: all 0.3s linear;
    color: #1c1c1c;

    font-size: 14px;
  }

  .MuiAccordionDetails-root {
    height: 5px solid red !important;
  }

  .title,
  item {
    color: #909090;
    cursor: pointer;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    text-align: left;
  }
  .title:hover {
    color: #1c1c1c;
    cursor: pointer;
  }

  /* search input style */

  .search-input {
    border: 0.3px solid #dedede;
    background: none;
    outline: none;
    float: right;
    padding: 2px;
    color: #757070;
    font-size: 20px;
    transition: 0.4s;
    border-radius: 2px;
    transition: all 0.3s ease;
    width: 90%;
    margin: 5px;
  }
  input:focus {
    outline: 2px solid #563d7c;
  }
  @media screen and (max-width: 768px) {
    /* width: 100%; */
    .leftSidebar {
      overflow-y: hidden;
      height: auto;
    }
    .search-input {
      display: none;
    }
    /* height: 100%; */
  }
`;

export default LeftSidebar;
