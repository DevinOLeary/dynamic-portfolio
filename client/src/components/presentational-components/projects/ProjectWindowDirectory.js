import React from 'react';

import DesignProject from './DesignProject';
import WebProject from './WebProject';
import AnimationProject from './AnimationProject';
import SingleProjectContent from './SingleProjectContent';



const ProjectWindowDirectory = (props) => {
  console.log(props.singleProject);
  let contentWindow = ''
  if(props.singleProject && typeof props.singleProject != 'undefined'){
    let projectContent= '';
    if(props.category === "design"){
      projectContent = <DesignProject {...props}/>
    } else if(props.category === "development"){
      projectContent = <WebProject {...props}/>
    } else if(props.category === "animation"){
      projectContent = <AnimationProject {...props}/>
    } else{
      projectContent = '';
    }
  contentWindow = projectContent
  }
  return (
    <div className="full-width">
      {contentWindow != '' ?
      <SingleProjectContent {...props} closeProject={props.closeProject}>
        {contentWindow}
      </SingleProjectContent>
    : <div/>
    }
  </div>
  );
}

export default ProjectWindowDirectory;
