import React from "react";
import "./App.sass";
import { MainRoutes } from "./routes/MainRouter";
import { RoutesContext } from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";
export const App: React.FC = () => {
  return (
    <div className="main-app">
      <RoutesContext.Provider value={useRoutes}>
        <MainRoutes />
      </RoutesContext.Provider>
    </div>
  );
};
