import React, { useEffect, useState } from "react";
import PortfoioList from "../PortfolioList/PortfoioList";
import "./portfolio.scss";
import {
  spotlight,
  webApps,
  mobileApps,
  games,
  groupProjects,
} from "../../components/data";

const Portfolio = () => {
  const [selected, setSelected] = useState("spotlight");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "Spotlight":
        setData(spotlight);
        break;
      case "Web apps":
        setData(webApps);
        break;
      case "Mobile apps":
        setData(mobileApps);
        break;
      case "Games":
        setData(games);
        break;
      case "Group projects":
        setData(groupProjects);
        break;
      default:
        setData(spotlight);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="title">Portfolio</h1>
      <PortfoioList selected={selected} setSelected={setSelected} />
      <div className="projectContainer">
        {data.map((project) => {
          return (
            <div className="project">
              <img src={project.img} alt={project.title} />
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
