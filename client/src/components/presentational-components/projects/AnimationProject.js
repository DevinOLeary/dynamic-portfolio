import React from 'react';

import ProjectSlider from './ProjectSlider';

const AnimationProject = (props) => {
  const project = props.animations;
  console.log(project);
  const animationList = project.map((item) => {
    return <div className="flex-container center" key={item}>
              {item}
          </div>
        });
  return (
    <div className="full-width">
      <hgroup className="project-title">
        <h2 className="text-center">My Animations</h2>
        <hr className="divider-colored"/>
      </hgroup>
      <section className="flex-container row center">
        <aside className="project_preview-description">
          <p>Here are some of my animations</p>
        </aside>
        <aside className="project_preview-slider flex-container center">
          <ProjectSlider>
            {animationList}
          </ProjectSlider>
        </aside>
      </section>
    </div>
  );
}

export default AnimationProject;
