import React from 'react';

import ProjectSlider from './ProjectSlider';

const AnimationProject = () => {
  const iframeStyle = {
    width: '100%'
  }
  const sandBoxStyle = {
    width:'100%',
    height:'500px',
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
              <iframe height='100%' scrolling='no' title='Sunset' src='//codepen.io/djoleary07/embed/preview/gXbNpv/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style={iframeStyle}>See the Pen <a href='https://codepen.io/djoleary07/pen/gXbNpv/'>Sunset</a> by Devin OLeary (<a href='https://codepen.io/djoleary07'>@djoleary07</a>) on <a href='https://codepen.io'>CodePen</a>.
              </iframe>
            </div>
            <div className="animation-project flex-container center">
              <iframe src="https://codesandbox.io/embed/9z0j727vwp?view=preview" style={sandBoxStyle} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
            </div>
          </ProjectSlider>
        </div>
      </section>
    </div>
  );
}

export default AnimationProject;
