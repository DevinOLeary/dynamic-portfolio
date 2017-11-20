import React from 'react';

import DesignProject from './DesignProject';
import WebProject from './WebProject';
import AnimationProject from './AnimationProject';
import SingleProjectContent from './SingleProjectContent';



const ProjectWindowDirectory = (props) => {
  let contentWindow = ''
    if(props.activeProject.length > 0){
    let projectContent= '';
    if(props.openProject.acf.category === "Design"){
      projectContent = <DesignProject {...props}/>
    } else if(props.openProject.acf.category === "Development"){
      projectContent = <WebProject {...props}/>
    } else if(props.opProject.acf.category === "Animation"){
      projectContent = <AnimationProject {...props}/>
    } else{
      projectContent = '';
    }
    contentWindow = projectContent
  }
  return (
    <div className="full-width">
      {contentWindow !== '' ?
      <SingleProjectContent {...props} closeProject={props.closeProject}>
        {contentWindow}
      </SingleProjectContent>
    : <div/>
    }
  </div>
  );
}

export default ProjectWindowDirectory;
