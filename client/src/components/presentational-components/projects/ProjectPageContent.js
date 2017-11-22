import React from 'react';
import {Element} from 'react-scroll';
import {TransitionGroup} from 'react-transition-group';

//components
import ProjectList from './ProjectList'
import SkillsSection from './SkillsSection';
import LoadingPane from '../../small-components/LoadingPane';
import ProjectWindowDirectory from './ProjectWindowDirectory';


const ProjectListContainer = (props) => {
    return (props.loading === true ? <LoadingPane/> :
      <section className="flex-container center column">
        <TransitionGroup>
          <SkillsSection {...props}/>
        </TransitionGroup>
        <Element name='projectPane'><div></div></Element>
        <ProjectWindowDirectory {...props} closeProject={props.closeProject}/>
        <ProjectList {...props} isOpen={props.isOpen} updateCategoryList={props.updateCategoryList}/>
      </section>);
}

export default ProjectListContainer;
