import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubAlt } from "react-icons/di";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="icons">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/yhan1205/"
        >
          <AiFillLinkedin />
        </a>
        <br />
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/yhan1205/"
        >
          <DiGithubAlt />
        </a>
      </div>
      <div className="licence">©2020 Young Han all rights reserved.</div>
    </div>
  );
}
