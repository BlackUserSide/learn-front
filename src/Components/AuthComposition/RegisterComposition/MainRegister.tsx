import React, { FormEvent, useState } from "react";
import { registerUsers } from "../../../api/users";

import { ILoginMain } from "../LoginComposition/MainLogin";
export const MainRegister: React.FC = () => {
  const [dataRegister, setDataRegister] = useState<ILoginMain>({
    email: "",
    password: "",
  });
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name: string = e.currentTarget.name;
    const val: string = e.currentTarget.value;
    setDataRegister((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      login: dataRegister.email,
      password: dataRegister.password,
    };
    registerUsers(data).then((res) => {
      if (res) {
        window.location.href = "/login";
      }
    });
  };
  console.log(dataRegister);

  return (
    <div className="main-register-wrapper">
      <h1 className="h1">Регистрация</h1>
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
        <div className="btn-wrapper">
          <button type="submit">Регистрация</button>
        </div>
      </form>
    </div>
  );
};
