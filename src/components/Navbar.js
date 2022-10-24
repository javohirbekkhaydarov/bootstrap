import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import styled from "styled-components";
import "../styles/Main.css";

//? navbar dropdown
const Navbar = ({ setStatus, status }) => {
  const [value, setValue] = useState({
    all: false,
    development: false,
    ecosystem: false,
    docs: false,
    search: false,
  });

  // ? scroll function

  const [scrollValue, setScrollValue] = useState(false);

  const scrollFunct = () => {
    if (window.scrollY > 100) {
      setScrollValue(true);
    } else {
      setScrollValue(false);
    }
  };

  window.addEventListener("scroll", scrollFunct);

  return (
    <Wrapper>
      <div className="navbar">
        {/*?navbar top */}
        <div className="navbar-top">
          <p className="navbar-top-text">
            There`s a newer version of Bootstrap 4!
          </p>
        </div>

        {/* navbar links */}
        <div className={`nav ${scrollValue ? "nav-fixed" : ""}`}>
          <div className="left-nav">
            <a href="#" className="logo">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" />
            </a>
            <ul className="links-ul">
              <li onClick={() => setValue({ all: true })} className="li-rel">
                <a href="#" className="links-title">
                  Home
                </a>
              </li>
              <li onClick={() => setValue({ all: true })} className="li-rel">
                <a href="#" className="links-title">
                  {" "}
                  Documentation
                </a>
              </li>
              <li onClick={() => setValue({ all: true })} className="li-rel">
                <a href="#" className="links-title">
                  Examples
                </a>
              </li>
              <li onClick={() => setValue({ all: true })} className="li-rel">
                <a href="#" className="links-title">
                  Themes
                </a>
              </li>
              <li onClick={() => setValue({ all: true })} className="li-rel">
                <a href="#" className="links-title">
                  Expo{" "}
                </a>
              </li>
              <li onClick={() => setValue({ all: true })} className="li-rel">
                <a href="#" className="links-title">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* change version and icons button */}
          <div className="links">
            <ul className="links-ul">
              <li onClick={() => setValue({ all: true })} className="li-rel">
                <span className="links-title">
                  V &nbsp;&nbsp; 4.1
                  <span className="links-icon">
                    <AiOutlineCaretDown />
                  </span>
                </span>
                <div className={`li-absolute ${value.all ? "li-show" : null}`}>
                  <a href="#">version 4.0</a>
                  <a href="#">version 3.0</a>
                  <a href="#">version 2.0</a>
                </div>
              </li>
              <div
                onClick={() => setValue({ all: false })}
                className={`modal-back ${value.all ? "modal-back-show" : null}`}
              ></div>
            </ul>
            <div className="navbar-icons">
              <div className="github-icon">
                <BsGithub />
              </div>

              <div className="twit-icon">
                <BsTwitter />
              </div>
              <button className="btn">Download</button>
            </div>
            <div className="sidebar-icon"></div>
          </div>
        </div>
        <div className="bar-search">
          <div className="search-box ">
            <li className="li-rel">
              <input
                className="search-input"
                type="text"
                name=""
                placeholder="Search"
              />
            </li>
            <FaBars onClick={() => setStatus(true)} className="FaBars" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s linear;
  }

  /*! modal back style */
  .modal-back {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    z-index: 454;
    display: none;
    cursor: pointer;
  }

  .modal-back-show {
    display: block;
  }

  /* ************************** navbar****** */
  .navbar {
    display: flex !important;
    flex-direction: column !important;
    width: 100%;
    z-index: 655;
    transition: all 0.3s linear;
  }
  .navbar-top {
    height: 40px;
    text-align: center;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin: 0;
    padding: 10px;
    height: 60px;
    background-color: #563d7c;
    transition: all 0.3s linear;

    z-index: 22;
  }

  .nav-fixed {
    position: fixed;
    top: 0px;
    transition: all 0.3s linear;

    width: 100%;
  }

  .left-nav {
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin: 0;

    background-color: #563d7c;
    z-index: 22;
  }
  .navbar-icons {
    color: #dedede;

    display: flex;
    justify-content: space-around;
    width: 20%;
    align-items: center;
    font-size: 22px;
  }
  .FaBars {
    color: #444;
    font-size: 24px;
    margin: 0px 3px;
    display: none;
  }
  .nav .logo {
    margin: 0;
    padding: 2px;
    display: flex;
    justify-content: center;
  }
  .nav .logo img {
    width: 40px;
    border-radius: 5px;
    background: #fff;
    padding: 1px;
  }
  .links {
    display: flex;
    justify-content: space-between;
  }

  .links #version {
    background: transparent;
    border: none;
    color: #dedede;
    font-size: 16px;
  }
  #version:focus {
    outline: none;
  }
  select {
    color: #c1c1c1 !important;
  }
  /* *******************************     displeay none */
  .links-ul {
    z-index: 446;
    margin: 0;
  }
  .li-rel {
    position: relative;
    display: flex;
    justify-content: space-between;
    border: none;
    margin-left: 20px;
    padding: 5px 5px;
    transition: all 0.3s ease;
    color: #fff;
    width: 100%;
  }

  .li-absolute {
    position: absolute;
    top: 30px;
    padding: 10px 0px;
    background-color: #fff;
    display: none;
    z-index: 440;
    border-radius: 4px;
    box-shadow: 0.5px 0.5px 5px #d1cfcf;
    margin-top: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2px auto;
    text-align: left;
    width: 100%;
    color: #1c1c1c;
    cursor: pointer;
  }

  .li-color {
    color: #dedede;
  }
  .li-color-show {
    color: #fff;
  }

  .li-show {
    display: block;
  }
  .li-rel .li-absolute a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    color: #1c1c1c;
    cursor: pointer;
  }
  .li-rel .li-absolute a:hover {
    color: #909090;
    background: none;
    margin: 0 auto;
  }

  ul li a {
    /* display: none; */
    color: #898c8e;
    cursor: pointer;
    margin: 2px 20px;
    text-decoration: none;
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .li-rel .li-absolute a:hover {
    color: #1c1c1c;
    margin: 0 auto;
  }
  .links-title {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin: 0;
  }
  .links-icon {
    margin-left: 20px;
  }

  .navbar-icons div:hover {
    cursor: pointer;
    color: #fff;
  }

  .btn {
    color: #ffe484;
    background-color: transparent;
    border: 1px solid #ffe484;
    border-radius: 2px;
    padding: 10px 30px;
    margin: 2px;
    margin-left: 12px;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  .btn:hover {
    background-color: #ffe484;
    border: 1px solid #ffe484;
    color: #000;
    cursor: pointer;
  }

  /*  search btn */
  .search-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    width: 95%;
    display: none;
  }
  input:focus {
    outline: 2px solid #563d7c;
  }
  .search-btn {
    color: white;
    float: right;
    transition: all 0.3s ease;

    /* border-radius: 50%; */

    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 2s;
    padding-bottom: 8px;
  }

  .fa-search {
    color: #888;
    cursor: pointer;
    font-size: 20px;
    margin: 1rem 2rem;
  }

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
  }

  .links-ul {
    display: flex;
    justify-content: space-between;
  }
  /* Navbar bottom text */
  .navbar-top {
    background: #373b44; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #4286f4,
      #373b44
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #065b9a,
      #065b9a
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: #fff;
    display: flex;
    background: #3c255c;
    text-align: center;
    /* margin-top: 60px; */
  }
  .navbar-top:hover {
    background: #231832;
  }
  .navbar-top-text {
    /* padding: 0rem auto; */
    font-size: 14px;
    width: 40%;
    text-align: center;
    margin: auto;
    align-items: center;
  }
  .navbar-top-text a {
    color: #5ec0ea;
    text-decoration: none;
  }
  .navbar-top-text a:hover {
    text-decoration: underline;
  }

  .navbar-icons div {
    margin: 0px 5px;
  }

  /* **************************  responsive****** */

  @media screen and (max-width: 768px) {
    .navbar {
      height: 100%;
      width: 100%;
    }
    .nav {
      display: flex;
      justify-content: center;
      height: 100%;

      width: 100%;
    }
    width: 100%;
    .FaBars {
      color: #1c1c1c;
      font-size: 24px;
      margin: 0px 3px;
      display: block;
      cursor: pointer;
    }
    .left-nav {
      display: flex;
      /* justify-content: space-between ; */
      flex-direction: column;
    }
    .links-ul {
      display: flex;
      justify-content: space-between;
    }

    .links-ul li {
      margin: 0px 2px;
    }
    .navbar-icons {
      display: none;
    }
    .navbar-icons div {
      margin: 0px 20px;
    }

    .navbar-icons .btn {
      display: none;
    }
    .search-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease;
      width: 95%;
    }
    .links-title {
      font-size: 14px;
      margin: 0;
      padding: 0;
    }
  }
`;

export default Navbar;
