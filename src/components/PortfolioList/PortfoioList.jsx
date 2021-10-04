import React from "react";
import { useState } from "react";
import "./portfolioList.scss";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

const PortfoioList = () => {
  const [selected, setSelected] = useState("spotlight");

  const items = [
    {
      id: "spotlight",
      title: "spotlight",
    },
    {
      id: "web apps",
      title: "web apps",
    },
    {
      id: "mobile apps",
      title: "mobile apps",
    },
    {
      id: "games",
      title: "games",
    },
  ];

  return (
    <div>
      <ul className="portfolioList">
        {items.map((item) => {
          return (
            <PortfolioItem
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PortfoioList;
