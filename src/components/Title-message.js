import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: #66fcf1;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 35px;
      letter-spacing: 2px;
    }
`;

const TitleMessage = () => (
    <MyTitleMessage>
        <div className="titleMessage">
            <div className="heading">
                <div className="main text-center mb-3">
                    Hello Fellow Fitness People,
                    <br />
                    <span>
                        <strong>Welcome to Fitness Trackr!!!</strong>
                    </span>
                </div>
                <div className="sub">
                    <Typewriter
                        options={{
                            strings: ["Get Your Sweat On", "Record Your Routines", "Check Out Other User's Routines", "Have Fun!!!"],
                            autoStart: true,
                            loop: true,
                            delay: 50
                        }}
                    />
                </div>
            </div>
        </div>
    </MyTitleMessage>
);

export default TitleMessage;