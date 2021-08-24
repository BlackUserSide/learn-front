import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../api/users";
import { restoreToken } from "../../function/restoreToken";

export const Header: React.FC = () => {
  const [auth, setAuth] = useState<boolean>(false);
  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      getUser()
        .then((res) => {
          switch (res.status) {
            case 200:
              setAuth(true);
              break;
            case 401:
              setAuth(false);
              restoreToken();
              break;
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);
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
            <Link to="/philanthropist">Инвесторы</Link>
          </li>
          <li>
            {auth ? (
              <Link to="/cabinet/home">Кабинет</Link>
            ) : (
              <Link to="/login">Авторизация</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
