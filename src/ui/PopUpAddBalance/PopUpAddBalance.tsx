import React from "react";
import "./addBalance.sass";
type TProps = {
  setChange: any;
};
export const PopUpAddBalance: React.FC<TProps> = ({ setChange }) => {
  return (
    <div className="pop-up-add-balance">
      <div className="bg-lock" onClick={setChange}></div>
      <form className="form-add-balance">
        <p>На данный момент полполнение не доступно</p>
      </form>
    </div>
  );
};
