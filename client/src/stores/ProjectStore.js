import {observable, action, computed} from 'mobx';

class ProjectStore {
  @observable projectInfo = []
  @observable loading = true
  @observable activeCategory = 'all'
  @observable singleProject = {}
  @observable skillsArray = []

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

  @action loadSkillsArray(){
    return fetch('/api/photos/skills')
    .then(response => {
      return response.json();
    })
    .then(results => {
      this.skillsArray = results.picArray;
      this.loading = false;
      console.log(this.skillsArray);
    })
    .catch(error => console.log(error))
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
