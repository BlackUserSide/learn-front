import React from "react";
import img1 from "../../../images/Group 1.png";
import img2 from "../../../images/Group 5.png";
import img3 from "../../../images/Group 6.png";
import img4 from "../../../images/red-dream.png";
export const MainComponent: React.FC = () => {
  return (
    <div className="main-component">
      <div className="main-composition">
        <h1 className="h1">
          Краудфайдинг <br />
          для детей
        </h1>
        <p>Краудфандинговая площадка для детей</p>
        <span className="btn btn-main">Подробнее</span>
      </div>
      <img className="img_main_1" src={img1} alt="icon" />
      <img src={img2} className="img_main_2" alt="icon" />
      <img src={img3} className="img_main_3" alt="icon" />
      <div className="image-link-to-red">
        <img src={img4} alt="" />
        <div className="link-to-red">
          <a href="http://мои-мечты.рф/">Особенные детишки</a>
        </div>
      </div>
    </div>
  );
};
