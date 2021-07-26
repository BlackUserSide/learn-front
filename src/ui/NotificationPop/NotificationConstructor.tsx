import React from "react";
import "./notif.sass";
export const NorificationConstructor: React.FC = ({ children }) => {
  return <div className="notification-main">{children}</div>;
};
