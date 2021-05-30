import React from "react";
import { HeaderBlack } from "../Section/HeaderBlack";
import { PhilanthropistContent } from "./PhilanthropistContent";
export const PhilanthropistMain: React.FC = () => {
  return (
    <div className="philanthropist-main">
      <HeaderBlack />
      <div className="main-composition-philanthropist">
        <div className="main-text">
          <h1 className="h1">Благотворители</h1>
        </div>
      </div>
      <PhilanthropistContent />
    </div>
  );
};
