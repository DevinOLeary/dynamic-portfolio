import React from 'react';

import ProjectSlider from './ProjectSlider';


const DesignProject = (props) => {
  const project = props.singleProject;
  const imageList = project.imageArray.map((pic) => {
    return <div className="flex-container center project_img-container" key={pic}>
            <img src={pic} className="img-project_preview" alt={project.title}/>
          </div>
        });
  return(
    <div className="full-width">
      <hgroup className="project-title">
        <h2 className="text-center">{project.title}</h2>
        <hr className="divider-colored"/>
      </hgroup>
      <section className="flex-container row center">
        <aside className="project_preview-description">
          <p>{project.description}</p>
        </aside>
        <aside className="project_preview-slider flex-container center">
          <ProjectSlider>
            {imageList}
          </ProjectSlider>
        </aside>
      </section>
    </div>
  );
}

export default DesignProject;
