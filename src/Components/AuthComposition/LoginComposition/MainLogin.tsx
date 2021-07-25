import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../../api/users";
export interface ILoginMain {
  email: string;
  password: string;
}
export const MainLogin: React.FC = () => {
  const [dataLogin, setDataLogin] = useState<ILoginMain>({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<string | undefined>(undefined);
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name: string = e.currentTarget.name;
    const val: string = e.currentTarget.value;
    setDataLogin((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(dataLogin)
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              return;
            case 422:
              setMessage("Неправильный логин или пароль");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-login">
      <h1 className="h1">Авторизация</h1>
      <form className="main-auth-form" onSubmit={submitHandler}>
        <div className="top-err-message">{message ? <p>{message}</p> : ""}</div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={changeHandler}
        />
        <div className="btn-wrapper">
          <button type="submit">Войти</button>
          <span>
            <Link to="/register">Регистрация</Link>
          </span>
        </div>
      </form>
    </div>
  );
};
