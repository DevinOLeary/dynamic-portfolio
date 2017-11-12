import React from 'react';

import ProjectSlider from './ProjectSlider';


const DesignProject = (props) => {
  const {acf} = props.info;
  return(
    <div className="full-width">
      <h2 className="text-center">{acf.title}</h2>
      <section className="flex-container row center">
        <aside className="project_preview-description">
          <p>{acf.description}</p>
        </aside>
        <aside className="project_preview-slider flex-container center">
          <ProjectSlider>
          {acf.image_one.url &&
            <div className="flex-container center"><img src={acf.image_one.url} className="img-project_preview" alt={acf.title}/></div>
          }
          {acf.image_two.url &&
            <div className="flex-container center"><img src={acf.image_two.url} className="img-project_preview" alt={acf.title}/></div>
          }
          {acf.image_one.url &&
            <div className="flex-container center"><img src={acf.image_three.url} className="img-project_preview" alt={acf.title}/></div>
          }
          {acf.image_one.url &&
            <div className="flex-container center"><img src={acf.image_four.url} className="img-project_preview" alt={acf.title}/></div>
          }
          </ProjectSlider>
        </aside>
      </section>
    </div>
  );
}

export default DesignProject;
