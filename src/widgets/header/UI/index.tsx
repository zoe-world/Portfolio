import React from "react";
import "./styles.scss";
import GridLayout from "shared/layouts/UI/GridLayout";
const Header = () => {
  const goToTop = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header>
      <GridLayout>
        <nav>
          <h1 className="logo" onClick={(e) => goToTop}>
            ZOE_
          </h1>
          <ul className="nav__list">
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#information">INFORMATION</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </GridLayout>
    </header>
  );
};

export default Header;
