import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const clickedHamburger = (e) => {
    setOpen(!open);
    setValue(e.target.innerText);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={menuRef} className="mainContainer">
      <div className="mainText" style={{display:!open ? "block" : "none"}}>
        <h1 style={{ color: "white", paddingTop:"4%" }}>Young Chan Han</h1>
        <h4 style={{ color: "white", paddingBottom:"4%" }}>
          I am a driven full-stack engineer with an outstanding work ethic open
          to contributing
          <br /> my diverse skill set in a junior-level position.
        </h4>
      </div>
      <nav>
        {!open ? (
          <div className="navName" onClick={clickedHamburger}>
            About
          </div>
        ) : null}
        <div>{open && value === "About" ? <About /> : null}</div>

        {!open ? (
          <div className="navName" onClick={clickedHamburger}>
            Contact
          </div>
        ) : null}
        <div>{open && value === "Contact" ? <Contact /> : null}</div>
      </nav>
    </div>
  );
}
