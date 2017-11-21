import React from 'react';
import {inject, observer} from 'mobx-react';


//components
import ProjectPageContent from './presentational-components/projects/ProjectPageContent';
import ContentFadeIn from './small-components/ContentFadeIn';
import animations from './small-components/animations';


@inject('store')
@observer
class DevAndDesign extends React.Component {

  componentWillMount(){
    this.props.store.projectStore.loadProjects();
    this.props.store.projectStore.loadHeadshot();
  }

  componentDidMount(){
    this.props.store.projectStore.activeProject = '';
  }

  updateCategoryList = (category) => {
    this.props.store.projectStore.activeCategory = category
  }

  // have isOpen take the title instead of id and then fetch singleProjectInfo about
  // titled project, then send info as props to the Project window
  isOpen = (id) => {
    this.props.store.projectStore.loadSingleProject(id);
  };

  closeProject = () => {
    let boxItem = document.getElementById('boxItem');
    animations.fadeOut(boxItem);
    setTimeout(()=> {
      this.props.store.projectStore.activeProject = '';
    },1000)
  }


  render() {
    const {projectInfo, activeProject, loading, filteredProjects, activeCategory,singleProject, skillsArray} = this.props.store.projectStore;
    const props = {projectInfo, activeProject, loading, filteredProjects, activeCategory, singleProject, skillsArray}

    return(
      <main className="body-container">

        <hgroup>
          <h2 className="text-center">my work</h2>
          <br/>
        </hgroup>
        <ContentFadeIn in={!loading}>
          <ProjectPageContent {...props} closeProject={this.closeProject} isOpen={this.isOpen} updateCategoryList={this.updateCategoryList}/>
        </ContentFadeIn>
      </main>

    );
  }
}

export default DevAndDesign;
