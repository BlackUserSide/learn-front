import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../../../../images/no-avatar.png";
import { NorificationConstructor } from "../../../../../ui/NotificationPop/NotificationConstructor";
type TProps = {
  content: any;
};
export const DreamerCabinet: React.FC<TProps> = ({ content }) => {
  const [errMessage, setErrMessage] = useState<string>("");
  const changeAvatar = () => {
    setErrMessage(
      "Ой! Наши серввера не готовы работать с изображением прямо сейчас. Приносим  извинения, наши разработчики уже работают над решением этой проблемы."
    );
  };
  return (
    <>
      <div className="dreamer-cabinet">
        <div className="top-line">
          <h1 className="h1">Мечтатель</h1>
        </div>
        <div className="image-avatar-wrapper">
          <img src={avatar} onClick={changeAvatar} alt="" />
        </div>
        <div className="name-wrapper">
          <h2 className="h2">
            {content.firstName !== ""
              ? `${content.firstName} ${content.lastName}`
              : "Смена имени не появилась в это версии"}
          </h2>
        </div>
        <div className="procent-dreamer">
          {/* <p>
          Благотворительная часть: <span>Недоступна</span>
        </p> */}
        </div>
        <div className="btn-wrapper-main">
          <Link to="/cabinet/dreams">Мои мечты</Link>
        </div>
      </div>
      {errMessage !== "" ? (
        <NorificationConstructor>
          <p>{errMessage}</p>
        </NorificationConstructor>
      ) : (
        ""
      )}
    </>
  );
};
