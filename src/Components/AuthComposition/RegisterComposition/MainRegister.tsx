import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUsers } from "../../../api/users";
import { IRegisterMain } from "./type";
//import { NorificationConstructor } from "../../../ui/NotificationPop/NotificationConstructor";
export const MainRegister: React.FC = () => {
  const history = useHistory();
  const [dataRegister, setDataRegister] = useState<IRegisterMain>({
    email: "",
    password: "",
    secondPassword: "",
    role: null,
    firstName: "",
    lastName: "",
    status: 0,
  });
  const [message, setMessage] = useState<string | null>(null);
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name: string = e.currentTarget.name;
    const val: string = e.currentTarget.value;
    setDataRegister((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const changeRole = (role: number) => {
    setDataRegister((prev) => ({
      ...prev,
      role: role,
    }));
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !dataRegister.email.match(/^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$/) ||
      dataRegister.email === ""
    ) {
      setMessage("Некоректный Email");
      return;
    }
    if (dataRegister.password === "") {
      setMessage("Пароль не может быть пустым");
      return;
    }
    if (
      dataRegister.password !== dataRegister.secondPassword ||
      dataRegister.secondPassword === ""
    ) {
      setMessage("Пароли должны совпадать");
      return;
    }
    if (dataRegister.role === null) {
      setMessage("Нужно выбрать роль");
      return;
    }
    const data = {
      email: dataRegister.email,
      password: dataRegister.password,
      role: dataRegister.role,
      firstName: dataRegister.firstName,
      lastName: dataRegister.lastName,
      status: 0,
      procent: 0,
      photo: "",
    };
    registerUsers(data).then((res) => {
      if (res) {
        switch (res.status) {
          case 201:
            history.push("/login");
            break;
          case 422:
            setMessage("Такой пользователь уже зарегестрирован");
            return;
        }
      }
    });
  };

  return (
    <div className="main-register-wrapper">
      <h1 className="h1">Регистрация</h1>
      <div className="err-form-wrapper">{message ? <p>{message}</p> : ""}</div>
      <form className="main-auth-form" onSubmit={submitHandler}>
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
        <input
          type="password"
          name="secondPassword"
          placeholder="Повторите пароль"
          onChange={changeHandler}
        />

        <div className="btn-role-change">
          <span
            className={`role-btn ${
              dataRegister.role === 0 ? "active-role-btn" : ""
            }`}
            onClick={() => changeRole(0)}
          >
            Мечтатель
          </span>
          <span
            className={`role-btn ${
              dataRegister.role === 1 ? "active-role-btn" : ""
            }`}
            onClick={() => changeRole(1)}
          >
            Инвестор
          </span>
        </div>
        {dataRegister.role === 1 || dataRegister.role === 0 ? (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="Имя"
              onChange={changeHandler}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Фамилия"
              onChange={changeHandler}
            />
          </>
        ) : (
          ""
        )}
        <div className="btn-wrapper">
          <button type="submit">Регистрация</button>
        </div>
      </form>
    </div>
  );
};
