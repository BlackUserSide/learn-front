import React from "react";
import bg from "../../../images/pexels-daria-obymaha-1683975 1.jpg";
export const AboutComponent: React.FC = () => {
  return (
    <div className="about-component-wrapper">
      <div className="container-about-wrapper">
        <div className="image-wrapper">
          <img src={bg} alt="" />
        </div>
        <div className="about-composition-wrapper">
          <p>
            Наш проект создан с одной целью - сделать еще одного ребенка
            счастливее, исполнив его мечту! Вы, родители, знаете, что нужно
            вашему ребенку, чтобы увидеть счастье и радость на его лице! А мы, в
            свою очередь, будем рады помочь Вам в этом!
          </p>
          <span className="btn btn-about-wrapper">Подробнее</span>
        </div>
      </div>
    </div>
  );
};
