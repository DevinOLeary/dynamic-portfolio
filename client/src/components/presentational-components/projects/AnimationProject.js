import React from 'react';

import ProjectSlider from './ProjectSlider';

const AnimationProject = (props) => {
  const project = props.singleProject;
  const imageList = project.imageArray.map((pic) => {
    return <div className="flex-container center" key={pic}>
            <img src={pic} className="img-project_preview" alt={project.title}/>
          </div>
  });
  return (
    <div className="full-width">
      <h2 className="text-center">{project.title}</h2>
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

export default AnimationProject;
