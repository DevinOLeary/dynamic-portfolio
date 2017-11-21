import React from 'react';

import ProjectSlider from './ProjectSlider';


const WebProject = (props) => {
  const project = props.singleProject;
  const imageList = project.imageArray.map((pic) => {
    return <div className="flex-container center" key={pic}>
            <img src={pic} className="img-project_preview" alt={project.title}/>
          </div>
        });
  return (
    <div>
      <h2 className="text-center">{project.title}</h2>
      <hr className="divider-colored"/>
      <br/>
      <section className="flex-container row center">
        <aside className="project_preview-container">
          <p>{project.description}</p>
        </aside>
        <aside className="project_preview-container flex-container center">
          <ProjectSlider>
            {imageList}
          </ProjectSlider>
        </aside>
      </section>
      <footer className="flex-container center">
        <a href={project.link} target="blank" rel="noopener noreferrer">View the site</a>
      </footer>
    </div>
  );
}

export default WebProject;
