export default Experiment;

import * as React from "react";
import data from "./data.json";
import photo from "./images/photo.png";
import "./About.css";

export const About = () => {
  return (
    <>
      <div className="about-body">
        <h1 className="page-title">ABOUT ME</h1>
        <div className="about-content">
          <div
            className="image_div"
            style={{ backgroundImage: 'url("' + photo + '")' }}
          />
          <div className="description-container">
            <p className="description">{data.about.description}</p>
          </div>
        </div>
        <div className="divider-container">
          <div className="divider" />
        </div>
      </div>
      <div className="projects-body">
        <h2 className="projects-title">PAST PROJECTS</h2>
        <h3 className="projects-subtitle">
          Check out a few projects and initiatives I’ve been involved in
        </h3>
        <div className="projects">
          {data.projects.map((project, i) =>
            i % 2 === 0 ? (
              <RightContent
                image={project.image}
                description={project.description}
                title={project.title}
                tools={project.tools}
                link={project.link}
                key={i}
              />
            ) : (
              <LeftContent
                image={project.image}
                description={project.description}
                title={project.title}
                tools={project.tools}
                key={i}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export const LeftContent = (props) => {
  const { image, description, title, tools, link } = props;
  return (
    <div className="left-project">
      <div className="left-project-content">
        <h1 className="title">{title}</h1>
        <h2 className="tools">{tools}</h2>
        <p className="description">{description}</p>
        {link && (
          <form action={link} method="get" target="_blank">
            <button className="btn btn-outline-dark" type="submit">View Here</button>
          </form>
        )}
      </div>
      <img className="image" src={require(`${image}`)} alt={title} />
    </div>
  );
};

export const RightContent = (props) => {
  const { image, description, title, tools, link } = props;
  return (
    <div className="right-project">
      <img className="image" src={require(`${image}`)} alt={title} />
      <div className="right-project-content">
        <h1 className="title">{title}</h1>
        <h2 className="tools">{tools}</h2>
        <p className="description">{description}</p>
        {link && (
          <form action={link} method="get" target="_blank">
            <button className="btn btn-outline-dark" type="submit">View Here</button>
          </form>
        )}
      </div>
    </div>
  );
};
