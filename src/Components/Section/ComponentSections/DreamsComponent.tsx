import React, { useState } from "react";
import img1 from "../../../images/image 1.png";
import img2 from "../../../images/image 2.png";
import img3 from "../../../images/image3.png";
interface Tprops {
  id: number;
  name: string;
  nameDream: string;
  img: any;
}
export const DreamsComponent: React.FC = () => {
  const [state] = useState<Array<Tprops>>([
    { id: 0, name: "Мишель", nameDream: "Поездка в диснейленд", img: img1 },
    { id: 1, name: "Антон", nameDream: "Поездка в диснейленд", img: img2 },
    { id: 2, name: "Георгий", nameDream: "Поездка в диснейленд", img: img3 },
    { id: 2, name: "Дария", nameDream: "Поездка в диснейленд", img: img3 },
  ]);
  return (
    <div className="dream-component-wrapper">
      <div className="top-line">
        <h2 className="h2">Мечты отображаются по мере исполнения</h2>
      </div>
      <div className="dreams-wrapper">
        {state.map((e, i) => (
          <div className="item-dream-wrapper" key={i}>
            <div className="image-wrapper">
              <img src={e.img} alt="" />
            </div>
            <div className="info-dream-wrapper">
              <div className="name-wrapper">
                <p>{e.name}</p>
              </div>
              <div className="border-line"></div>
              <h4 className="h4">Мечта</h4>
              <div className="dream-name">
                <h3 className="h3">{e.nameDream}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
