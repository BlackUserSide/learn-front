import React from "react";
import { Link } from "react-router-dom";
import a from "../../../images/image 1.png";
export const ItemDream: React.FC = () => {
  return (
    <Link to="/dreams/:id">
      <div className="item-dream">
        <div className="image-wrapper">
          <img src={a} alt="" />
        </div>
        <div className="name-child">
          <h3 className="h3">Мишель</h3>
        </div>
        <div className="name-dream">
          <p>Поездка в диснейленд</p>
        </div>
        <div className="need-balance">
          <p>Требуется: 1000000 MYC</p>
        </div>
      </div>
    </Link>
  );
};
