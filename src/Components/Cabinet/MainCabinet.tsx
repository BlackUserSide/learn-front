import React, { useEffect } from "react";
import "./cabinet.sass";
import { Switch, useHistory } from "react-router-dom";
import { RouteWithSubRoutes } from "../../routes/RouteWithSubRoutes";
type Tprops = {
  routes: any;
};
export const MainCabinet: React.FC<Tprops> = ({ routes }) => {
  const history = useHistory();
  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
    if (history.location.pathname === "/cabinet") {
      history.push("/cabinet/home");
    }
  }, [history]);
  return (
    <div className="main-cabinet-wrapper">
      <Switch>
        {routes
          ? routes.map((route: any, i: any) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))
          : ""}
      </Switch>
    </div>
  );
};
