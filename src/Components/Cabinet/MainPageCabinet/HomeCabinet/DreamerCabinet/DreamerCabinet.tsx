import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../../../../images/no-avatar.png";
export const DreamerCabinet: React.FC = () => {
  return (
    <div className="dreamer-cabinet">
      <div className="top-line">
        <h1 className="h1">Мечтатель</h1>
      </div>
      <div className="image-avatar-wrapper">
        <img src={avatar} alt="" />
      </div>
      <div className="name-wrapper">
        <h2 className="h2">Сергей Несмеянов</h2>
      </div>
      <div className="procent-dreamer">
        <p>
          Благотворительная часть: <span>{"25"}%</span>
        </p>
      </div>
      <div className="btn-wrapper-main">
        <Link to="/cabinet/dreams">Мои мечты</Link>
      </div>
    </div>
  );
};
