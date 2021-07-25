import React from "react";
import { HeaderBlack } from "../../Section/HeaderBlack";
import { ItemDream } from "./ItemDream";

import "./mydream.sass";

export const MyDreamPage: React.FC = () => {
  return (
    <div className="my-dream-page">
      <HeaderBlack />
      <div className="item-container">
        <ItemDream />
      </div>
    </div>
  );
};
