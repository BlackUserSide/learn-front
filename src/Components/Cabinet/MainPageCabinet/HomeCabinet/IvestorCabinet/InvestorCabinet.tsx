import React from "react";

import avatar from "../../../../../images/no-avatar.png";
export const InvestorCabinet: React.FC = () => {
  return (
    <div className="investor-cabinet">
      <div className="top-line">
        <h1 className="h1">Инвестор</h1>
      </div>
      <div className="image-avatar-wrapper">
        <img src={avatar} alt="" />
      </div>
      <div className="name-wrapper">
        <h2 className="h2">Сергей Несмеянов</h2>
      </div>
      <div className="balance-dreamer">
        <p>
          Баланс: <span>{2350} MYC</span>
        </p>
      </div>
      <div className="btn-wrapper-main">
        <span>Пополнить</span>
      </div>
    </div>
  );
};
