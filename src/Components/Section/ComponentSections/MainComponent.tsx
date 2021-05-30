import React from "react";
import img1 from "../../../images/Group 1.png";
import img2 from "../../../images/Group 5.png";
import img3 from "../../../images/Group 6.png";
import img4 from "../../../images/Group 7.png";
export const MainComponent: React.FC = () => {
  return (
    <div className="main-component">
      <div className="main-composition">
        <h1 className="h1">
          Благотварительная
          <br /> платформа
        </h1>
        <p>Крауфандинговая площадка для детей</p>
        <span className="btn btn-main">Подробнее</span>
      </div>
      <img className="img_main_1" src={img1} alt="icon" />
      <img src={img2} className="img_main_2" alt="icon" />
      <img src={img3} className="img_main_3" alt="icon" />
      <img src={img4} className="img_main_4" alt="icon" />
    </div>
  );
};
