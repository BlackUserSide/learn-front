import React, { useState } from "react";
import { useEffect } from "react";
import { getDreamUser } from "../../../api/dreams";

import { PopUpDream } from "../../../ui/PopAddDream/PopUpDream";
import { HeaderBlack } from "../../Section/HeaderBlack";
import { ItemDream } from "./ItemDream";

import "./mydream.sass";

export const MyDreamPage: React.FC = () => {
  const [activeAdd, setActiveAdd] = useState<boolean>(false);
  const [dataDream, setDataDream] = useState<any>([]);
  const changeHandler = () => {
    if (activeAdd) {
      setActiveAdd(false);
      return;
    }
    setActiveAdd(true);
  };
  useEffect(() => {
    getDreamUser()
      .then((res) => {
        switch (res.status) {
          case 200:
            setDataDream(res.data);
            break;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="my-dream-page">
        <HeaderBlack />
        <div className="top-line">
          <h1 className="h1">Мои мечты</h1>
          <span onClick={changeHandler}>Создать мечту</span>
        </div>
        <div className="item-container">
          {dataDream.map((e: any, i: any) => (
            <ItemDream content={e} key={i} />
          ))}
        </div>
      </div>
      {activeAdd ? <PopUpDream setActive={changeHandler} /> : ""}
    </>
  );
};
