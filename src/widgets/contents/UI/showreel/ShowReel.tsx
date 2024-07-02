import React from "react";
import GridLayout from "shared/layouts/UI/GridLayout";
import { projects } from "shared/layouts/model/projectData";

const ShowReel = () => {
  return (
    <section id="show-reel" className="show-reel__wrap page">
      <h2 className="show-reel__title">ZOE'S PROJECT</h2>
      <h2 className="screen-reader-text">주요 프로젝트 영역</h2>
      <ul className="show-reel__list">
        {projects.map((project, index) => {
          return (
            <li className="show-reel__list__item" key={index}>
              <article>
                <h3>
                  <button type="button" className="show-reel__link">
                    <span className="screen-reader-text">{project.name}</span>
                  </button>
                </h3>
                <figure className="show-reel__figure">
                  <span>
                    <img alt={project.name} src={project.img} />
                  </span>
                </figure>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ShowReel;
