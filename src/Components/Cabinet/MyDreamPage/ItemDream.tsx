import React from "react";
import { Link } from "react-router-dom";
import a from "../../../images/no-image.png";
type TProps = {
  content: any;
};
export const ItemDream: React.FC<TProps> = ({ content }) => {
  console.log(content);

  return (
    <Link to={`/dreams/${content.id}`}>
      <div className="item-dream">
        <div className="image-wrapper">
          <img src={a} alt="" />
        </div>
        <div className="name-child">
          <h3 className="h3">{content.nameChild}</h3>
        </div>
        <div className="name-dream">
          <p>{content.name}</p>
        </div>
        <div className="need-balance">
          <p>Требуется: {content.count} MYC</p>
        </div>
      </div>
    </Link>
  );
};
