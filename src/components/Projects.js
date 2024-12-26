import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    { name: "Projet 1", description: "Description du projet 1", link: "#" },
    { name: "Projet 2", description: "Description du projet 2", link: "#" },
  ];

  return (
    <section className="projects">
      <h2>Mes Projets</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;