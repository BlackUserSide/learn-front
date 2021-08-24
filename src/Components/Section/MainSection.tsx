import React from "react";
import { AboutComponent } from "./ComponentSections/AboutComponent";
import { DreamsComponent } from "./ComponentSections/DreamsComponent";
import { MainComponent } from "./ComponentSections/MainComponent";
import { ReviewComponents } from "./ComponentSections/ReviewComponents";
import { Header } from "./Header";

export const MainSection: React.FC = () => {
  return (
    <>
      <div className="main-section-wrapper">
        <Header />
        <MainComponent />
      </div>
      <AboutComponent />
      <DreamsComponent />
      <ReviewComponents />
    </>
  );
};
