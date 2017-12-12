import React from 'react';

import ProjectSlider from './ProjectSlider';

const AnimationProject = () => {
  const iframeStyle = {
    width: '100%'
  }
  const sandBoxStyle = {
    width:'100%',
    height:'30vw',
    border:0,
    overflow:'hidden'
  }
  return (
    <div className="full-width">
      <hgroup className="project-title">
        <h2 className="text-center">My Animations</h2>
        <hr className="divider-colored"/>
      </hgroup>
      <section className="flex-container center">
        <a href="https://codepen.io/djoleary07/" target="_blank" rel="noopener noreferrer">
          <h3 className="button-flat">View projects on Codepen</h3>
        </a>
      </section>
    </div>
  );
}

export default AnimationProject;
