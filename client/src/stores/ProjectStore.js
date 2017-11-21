import {observable, action, computed} from 'mobx';
import axios from 'axios';

class ProjectStore {
  @observable projectInfo = []
  @observable loading = true
  @observable activeCategory = 'all'
  @observable singleProject = {}

  @action loadProjects(category){
    return fetch(`/api/projects`)
    .then((response )=> {
      return response.json();
    })
    .then((results) => {
      this.projectInfo = results.objArray;
    })
    .catch((error) => console.log(error))
  }

  @action loadSingleProject(id){
    this.singleProject = {};
    return fetch(`/api/projects/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      this.singleProject = result.projectObject;
    })
    .catch((error) => {console.log(error)});
  }

  @computed get filteredProjects(){
    const active = this.activeCategory;
    return(
      active === 'all' ? this.projectInfo.filter(proj => (
        proj.category.toLowerCase() !== "skills"
      ))
      :
      this.projectInfo.filter(proj => (
        proj.category.toLowerCase() === this.activeCategory
      ))
    )
  }

}




export default ProjectStore;
