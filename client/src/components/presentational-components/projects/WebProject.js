import React from 'react';


const WebProject = (props) => {
  let acf = props.info.acf;
  return (
    <div>
      <h2 className="text-center">{acf.title}</h2>
      <section className="flex-container row center">
        <aside className="project_preview-container">
          <p>{acf.description}</p>
        </aside>
        <aside className="project_preview-container flex-container center">
          <img src={acf.image_one.url} alt={acf.title} className="img-project_preview"/>
        </aside>
      </section>
      <footer className="flex-container center">
        <a href="https://www.google.com" target="blank" rel="noopener noreferrer">View the site</a>
      </footer>
    </div>
  );
}

export default WebProject;
