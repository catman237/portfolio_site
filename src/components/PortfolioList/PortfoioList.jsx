import React from "react";
import { useState } from "react";
import "./portfolioList.scss";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

const PortfoioList = ({ selected, setSelected }) => {
  

  const items = [
    {
      id: "Spotlight",
      title: "Spotlight",
    },
    {
      id: "Web apps",
      title: "Web apps",
    },
    {
      id: "Mobile apps",
      title: "Mobile apps",
    },
    {
      id: "Games",
      title: "Games",
    },
    {
      id: "Group projects",
      title: "Group projects"
    }
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
