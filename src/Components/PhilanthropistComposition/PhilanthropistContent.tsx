import React from "react";
import img_1 from "../../images/user-1.jpg";
import img_2 from "../../images/user-2.jpg";
import img_3 from "../../images/user-3.jpg";
export const PhilanthropistContent: React.FC = () => {
  return (
    <div className="philanthropist-content">
      <div className="item-philanthropist-wrapper">
        <div className="image-wrapper">
          <img src={img_1} alt="" />
        </div>
        <div className="name-wrapper">
          <h3 className="h3">Сергей Несмеянов</h3>
        </div>
        <div className="lvl-wrapper">
          <p>
            Уровень: <span> Вода</span>
          </p>
        </div>
      </div>
      <div className="item-philanthropist-wrapper">
        <div className="image-wrapper">
          <img src={img_2} alt="" />
        </div>
        <div className="name-wrapper">
          <h3 className="h3">Никита Колесников</h3>
        </div>
        <div className="lvl-wrapper">
          <p>
            Уровень: <span> Вода</span>
          </p>
        </div>
      </div>
      <div className="item-philanthropist-wrapper">
        <div className="image-wrapper">
          <img src={img_3} alt="" />
        </div>
        <div className="name-wrapper">
          <h3 className="h3">Дмитрий Куприй</h3>
        </div>
        <div className="lvl-wrapper">
          <p>
            Уровень: <span> Вода</span>
          </p>
        </div>
      </div>
    </div>
  );
};
