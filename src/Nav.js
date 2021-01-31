import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg "
        alt="Netflix Logo"
      ></img>
      <Link to="/accounts">
        <img
          className="nav__avatar"
          src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
          alt="Netflix Avatar"
        ></img>
      </Link>
    </div>
  );
}

export default Nav;
