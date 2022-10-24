import * as React from "react";
import { useState } from "react";
import { InfoData } from "../json/InfoData";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Info = () => {
  const [value, setValue] = useState(InfoData);
  return (
    <Wrapper>
      <div className="flutter-center">
        <p className="flutter-title">Introduction</p>
      </div>
      <p className="flutter-title-bottom">
        Get started with Bootstrap, the world’s most popular framework for
        building responsive, mobile-first sites, with jsDelivr and a template
        starter page.
      </p>
      <div className="container">
        {value.map((info, id) => {
          return (
            <div className="flutter-center" key={id}>
              <h1 className="flutter-title"> {info.title} </h1>
              <p className="flutter-content">
                {info.content}
                <a href="#"> More </a>
              </p>
              <div className="code">
                <SyntaxHighlighter
                  language="javascript"
                  style={tomorrowNightBlue}
                >
                  {info.code}
                </SyntaxHighlighter>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 55%;

  .flutter-center {
    display: flex;
    flex-direction: column;
  }
  .container .rows .cols {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .container .rows .cols .box {
    display: flex;
    justify-content: center;
    border: 0.3px solid #dedede;
    margin: 10px;
    flex-direction: column;
    padding: 20px;
    width: 33%;
    border-radius: 3px;
    /* overflow: hidden; */
    /* border-bottom: 3px solid transparent; */
  }
  .box:hover {
    /* border: 3px solid #1b86e1; */
    cursor: pointer;
    box-shadow: inset 0px -3px 0px #1b86e1;
  }
  .box .box-title {
    font-size: 20px;
    color: #69a6fb;
    line-height: 30px;
    text-decoration: none;
  }
  .box .box-info {
    font-size: 16px;
  }
  .flutter-title {
    font-size: 48px;
    color: #4a4a4a;
    font-weight: 400;
    font-style: normal;
    display: flex;
    text-align: left;
    margin-left: 0px;

    width: 100%;
  }
  .flutter-title-bottom {
    font-size: 28px;
    color: #4a4a4a;
    font-weight: 400;
    font-style: normal;
    display: flex;
    text-align: left;
    margin-left: 0px;

    width: 100%;
  }
  .flutter-content {
    font-size: 16px;
    color: #4a4a4a;
    font-weight: 400;
    font-style: normal;
    display: flex;
    text-align: left;
    margin-left: 0px;

    width: 100%;
  }
  #bottom-content {
    list-style: circle;
    font-size: 16px;
    color: #1b86e1;
    font-weight: 400;
    font-style: normal;
    display: flex;
    text-align: left;
    margin-left: 0px;
    text-decoration: none;
    width: 100%;
  }
  #bottom-content:hover {
    text-decoration: underline;
    color: #5b86e1;
  }
  .videos-top {
    border: 0.3px solid #dedede;
    border-radius: 4px;
    padding: 10px;
    margin: 5px;
    width: 45%;
  }
  .flutter-video {
    font-size: 22px;
    color: #4a4a4a;
    font-weight: 400;
    font-style: normal;
    display: flex;
    text-align: center;
    margin: 20px 0px;
    padding: 0px;
    line-height: 29px;
    letter-spacing: 0.1px;
    width: 100%;
  }
  .flutter-content a {
    color: #1b86e1;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  .flutter-buttons {
    width: 100%;
    display: flex;

    justify-content: start;
  }

  .btn {
    color: #ffffff;
    background-color: #0176e8;
    border: 0;
    padding: 10px 20px;
    font-size: 16px;
    text-align: left;
    margin: 40px 0px;
  }
  .btn:hover {
    background-color: #085baf;
    cursor: pointer;
  }

  .code {
    width: 60%;
  }
  .code SyntaxHighlighter {
    border-radius: 4px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    .video {
      width: 90%;
    }
    .video .video-flex {
      width: 100%;
    }
  }
`;

export default Info;
