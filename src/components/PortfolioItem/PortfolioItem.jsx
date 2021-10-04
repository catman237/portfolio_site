import React from "react";
import "./portfolioItem.scss";

const PortfolioItem = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      <h1>{title}</h1>
    </li>
  );
};

export default PortfolioItem;
