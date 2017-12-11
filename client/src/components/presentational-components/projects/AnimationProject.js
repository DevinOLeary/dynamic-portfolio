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
        <div className="animation-container flex-container center">
          <ProjectSlider>
            <div className="animation-project_preview slide-item">
              <iframe height='100%' scrolling='no' title='Sunset' src='//codepen.io/djoleary07/embed/preview/gXbNpv/?theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style={sandBoxStyle}>See the Pen <a href='https://codepen.io/djoleary07/pen/gXbNpv/'>Sunset</a> by Devin OLeary (<a href='https://codepen.io/djoleary07'>@djoleary07</a>) on <a href='https://codepen.io'>CodePen</a>.
              </iframe>
            </div>
            <div className="animation-project_preview slide-item">
              <iframe src="https://codesandbox.io/embed/9z0j727vwp" style={sandBoxStyle} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
            </div>
          </ProjectSlider>
        </div>
      </section>
    </div>
  );
}

export default AnimationProject;
