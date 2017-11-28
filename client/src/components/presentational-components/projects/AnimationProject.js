import React from 'react';

import ProjectSlider from './ProjectSlider';

const AnimationProject = () => {
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
            <div>
              <p data-height="265" data-theme-id="0" data-slug-hash="gXbNpv" data-default-tab="result" data-user="djoleary07" data-embed-version="2" data-pen-title="Sunset" class="codepen">See the Pen <a href="https://codepen.io/djoleary07/pen/gXbNpv/">Sunset</a> by Devin OLeary (<a href="https://codepen.io/djoleary07">@djoleary07</a>) on <a href="https://codepen.io">CodePen</a>.</p>
              <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
            </div>
          </ProjectSlider>
        </aside>
      </section>
    </div>
  );
}

export default AnimationProject;
