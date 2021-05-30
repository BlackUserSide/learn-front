import React from "react";
import { HeaderBlack } from "../Section/HeaderBlack";
import { MainLogin } from "./LoginComposition/MainLogin";

export const LoginPage: React.FC = () => {
  return (
    <div className="login-page-wrapper">
      <HeaderBlack />
      <MainLogin />
    </div>
  );
};
