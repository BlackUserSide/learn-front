import React from "react";
import { HeaderBlack } from "../Section/HeaderBlack";
import { MainRegister } from "./RegisterComposition/MainRegister";

export const RegisterPage: React.FC = () => {
  return (
    <div className="register-page">
      <HeaderBlack />
      <MainRegister />
    </div>
  );
};
