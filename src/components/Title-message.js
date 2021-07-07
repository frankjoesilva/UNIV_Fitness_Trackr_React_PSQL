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
                            strings: ["Get Your Sweat On", "Record Your Work-out Routine and Routine Activities", "Check Out The Public Routines Tab To See Other User's Routines", "Have Fun!!!"],
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