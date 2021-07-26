import React, { useState } from "react";
import { PopUpDream } from "../../../ui/PopAddDream/PopUpDream";
import { HeaderBlack } from "../../Section/HeaderBlack";
import { ItemDream } from "./ItemDream";

import "./mydream.sass";

export const MyDreamPage: React.FC = () => {
  const [activeAdd, setActiveAdd] = useState<boolean>(false);
  const changeHandler = () => {
    if (activeAdd) {
      setActiveAdd(false);
      return;
    }
    setActiveAdd(true);
  };
  return (
    <>
      <div className="my-dream-page">
        <HeaderBlack />
        <div className="top-line">
          <h1 className="h1">Мои мечты</h1>
          <span onClick={changeHandler}>Создать мечту</span>
        </div>
        <div className="item-container">
          <ItemDream />
        </div>
      </div>
      {activeAdd ? <PopUpDream setActive={changeHandler} /> : ""}
    </>
  );
};
