import React from "react";


function ProjectItem({ id, name, about, technologies }) {
  const techElements = technologies.map(tech => {
    return <span key={tech}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3 key={id}>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techElements}
      </div>
    </div>
  );
}

export default ProjectItem;
