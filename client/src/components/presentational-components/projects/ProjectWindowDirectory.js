import React from 'react';

import DesignProject from './DesignProject';
import WebProject from './WebProject';
import AnimationProject from './AnimationProject';
import SingleProjectContent from './SingleProjectContent';



const ProjectWindowDirectory = (props) => {
  console.log(props.singleProject.length);
  console.log(props.singleProject);
  let contentWindow = ''
    if(props.singleProject.length > 0){
    let projectContent= '';
    if(props.category === "Design"){
      projectContent = <DesignProject {...props}/>
    } else if(props.category === "Development"){
      projectContent = <WebProject {...props}/>
    } else if(props.category === "Animation"){
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
