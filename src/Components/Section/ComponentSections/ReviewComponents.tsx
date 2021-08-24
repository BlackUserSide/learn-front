import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Rarrow from "../../../images/right-arrow.svg";
import Larrow from "../../../images/left-arrow.svg";
import "./review.sass";
import { useCallback } from "react";
import { useMemo } from "react";
interface IReview {
  id: number;
  review: string;
  name: string;
  position: string;
}
export const ReviewComponents: React.FC = () => {
  const [activeReviev, setActiveReview] = useState<IReview | undefined>(
    undefined
  );
  const [activeId, setActiveId] = useState<number>(0);
  const data: IReview[] = useMemo(() => {
    return [
      {
        id: 0,
        review:
          "Благодарю сервис майдрим за участие в осуществлении мечты моей дочи, она счастлива! Спасибо",
        name: "Анастасия",
        position: "Мать двоих детей",
      },
      {
        id: 1,
        review:
          "Круто! Наконец то появилась специализированная платформа помощи детям. Удачи вам",
        name: "Виктория",
        position: "Мать троих детей",
      },
      {
        id: 2,
        review: "Супер, проект работает как надо",
        name: "Сергей",
        position: "Front-end dev",
      },
    ];
  }, []);
  const getDataReview = useCallback(() => {
    setActiveReview(data[activeId]);
  }, [data, activeId]);
  useEffect(() => {
    getDataReview();
  }, [getDataReview]);
  const changeActiveSlide = (meth: string) => {
    setActiveReview(undefined);
    if (meth === "+") {
      let nextSlide = activeId + 1;
      if (nextSlide <= data.length - 1) {
        setActiveId(nextSlide);
        getDataReview();
      } else {
        nextSlide = 0;
        setActiveId(nextSlide);
        getDataReview();
      }
    } else {
      let nextSlide = activeId - 1;
      if (nextSlide < 0) {
        nextSlide = data.length - 1;
        setActiveId(nextSlide);
        getDataReview();
      } else {
        setActiveId(nextSlide);
        getDataReview();
      }
    }
  };
  return (
    <div className="review-component">
      <div className="top-line">
        <h2 className="h2">Отзывы</h2>
      </div>
      {activeReviev !== undefined ? (
        <div className="active-slider-wrapper">
          <div className="reviev-wrapper">
            <p>{activeReviev?.review}</p>
          </div>
          <div className="name-wrapper">
            <p>{activeReviev?.name}</p>
          </div>
          <div className="position-wrapper">
            <p>{activeReviev?.position}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="controll-panel">
        <span>
          <img
            src={Larrow}
            onClick={() => {
              changeActiveSlide("-");
            }}
            alt=""
          />
        </span>
        <span>
          <img
            src={Rarrow}
            onClick={() => {
              changeActiveSlide("+");
            }}
            alt=""
          />
        </span>
      </div>
    </div>
  );
};
