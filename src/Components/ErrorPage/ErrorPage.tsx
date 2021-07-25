import React from "react";
import "./eror.sass";
export const ErrorPage: React.FC = () => {
  return (
    <div className="error-page">
      <h1 className="h1">
        Данная страница не существует или находится в разработке
      </h1>
    </div>
  );
};
