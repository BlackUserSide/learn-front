import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { restoreToken } from "../../../../../function/restoreToken";
import logOut from "../../../../../images/logout.png";
import avatar from "../../../../../images/no-avatar.png";
import { PopUpAddBalance } from "../../../../../ui/PopUpAddBalance/PopUpAddBalance";
type TProps = {
  content: any;
};
export const InvestorCabinet: React.FC<TProps> = ({ content }) => {
  const history = useHistory();
  const [addBalance, setAddBalance] = useState<boolean>(false);
  console.log(addBalance);

  const changeHandler = () => {
    if (addBalance) {
      setAddBalance(false);
      return;
    }
    setAddBalance(true);
  };
  const logOutWrapper = () => {
    restoreToken();
    history.push("/");
  };
  return (
    <div className="investor-cabinet">
      <div className="top-line">
        <h1 className="h1">Инвестор</h1>
        <div className="log-out-wrapper" onClick={logOutWrapper}>
          <img src={logOut} alt="" />
        </div>
      </div>
      <div className="image-avatar-wrapper">
        <img src={avatar} alt="" />
      </div>
      <div className="name-wrapper">
        <h2 className="h2">
          {content.firstName !== ""
            ? `${content.firstName} ${content.lastName}`
            : "Смена имени не появилась в это версии"}
        </h2>
      </div>
      <div className="balance-dreamer">
        <p>
          Баланс: <span>{content.balance} MYC</span>
        </p>
      </div>
      <div className="btn-wrapper-main" onClick={changeHandler}>
        <span>Пополнить</span>
      </div>
      {addBalance ? <PopUpAddBalance setChange={changeHandler} /> : ""}
    </div>
  );
};
