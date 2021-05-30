import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <h2 className="h2">
          <Link to="/">My-dream</Link>
        </h2>
      </div>
      <nav className="main-nav-bar">
        <ul>
          <li>
            <a href="/#">О нас</a>
          </li>
          <li>
            <a href="/#">Мечтатели</a>
          </li>
          <li>
            <Link to="/philanthropist">Благотворители</Link>
          </li>
          <li>
            <Link to="/login">Авторизация</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
