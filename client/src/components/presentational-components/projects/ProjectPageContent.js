import React from 'react';
import {Element} from 'react-scroll';

//components
import ProjectList from './ProjectList'
import SkillsSection from './SkillsSection';
import LoadingPane from '../../small-components/LoadingPane';
import ProjectWindowDirectory from './ProjectWindowDirectory';
import animations from '../../small-components/animations';


class ProjectListContainer extends React.Component{
  animation(){
    const projectItems = this.list.querySelectorAll('.project-list-items');
    console.log(this.list)
    animations.fadeInList(projectItems);
  }
  render(props){
    console.log(this.list);
    return (this.props.loading === true ? <LoadingPane/> :
      <section className="flex-container center column">
        <SkillsSection {...props}/>
        <Element name='projectPane'><div></div></Element>
        <ProjectWindowDirectory {...props} closeProject={this.props.closeProject}/>
        <ProjectList {...props} isOpen={this.props.isOpen} updateCategoryList={this.props.updateCategoryList} ref={ref => this.list = ref} onLoad={this.animation}/>
      </section>);
  }
}

export default ProjectListContainer;
