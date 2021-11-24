import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllDreams } from "../../../api/dreams";
import noimage from "../../../images/no-image.png";
export interface IDream {
  balance: number;
  desc_dream: string;
  fullBalance: number;
  id: number;
  img: string;
  name: string;
  nameChild: string;
  status: number;
  userId: number;
}
export const DreamsComponent: React.FC = () => {
  const [state, setState] = useState<Array<IDream>>([]);
  useEffect(() => {
    getAllDreams()
      .then((res) => {
        if (res) {
          setState(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(state);

  return (
    <>
      {state.length !== 0 ? (
        <div className="dream-component-wrapper">
          <div className="top-line">
            <h2 className="h2">Мечты отображаются по мере исполнения</h2>
          </div>
          <div className="dreams-wrapper">
            {state.map((e, i) => (
              <Link to={`/dreams/${e.id}`} key={i}>
                <div className="item-dream-wrapper" key={i}>
                  <div className="image-wrapper">
                    <img src={e.img === "" ? noimage : ""} alt="" />
                  </div>
                  <div className="info-dream-wrapper">
                    <div className="name-wrapper">
                      <p>{e.nameChild}</p>
                    </div>
                    <div className="border-line"></div>
                    <h4 className="h4">Мечта</h4>
                    <div className="dream-name">
                      <h3 className="h3">{e.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
