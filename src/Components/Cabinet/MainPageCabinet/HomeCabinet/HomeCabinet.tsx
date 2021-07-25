import React from "react";
import { HeaderBlack } from "../../../Section/HeaderBlack";
import { DreamerCabinet } from "./DreamerCabinet/DreamerCabinet";
import { InvestorCabinet } from "./IvestorCabinet/InvestorCabinet";

export const HomeCabinet: React.FC = () => {
  return (
    <div className="home-cabinet">
      <HeaderBlack />
      <InvestorCabinet />
    </div>
  );
};
