import {observable, action, computed} from 'mobx';
import axios from 'axios';

class ProjectStore {
  @observable projectInfo = []
  @observable activeProject = ''
  @observable loading = true
  @observable activeCategory = 'all'

  @action loadProjects(){
    this.picInfo = []
    let dataUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/projects?_embed';
    return axios.get(dataUrl)
    .then(res => {
      this.projectInfo = res.data
      this.loading = false
    })
    .catch(error => console.log(error))
    }

  @computed get filteredProjects(){
    const active = this.activeCategory;
    return(
      active === 'all' ? this.projectInfo.filter(proj => (
        proj.acf.category.toLowerCase() !== "skills"
      )) :
      this.projectInfo.filter(proj => (
        proj.acf.category.toLowerCase() === this.activeCategory
      ))
    )
  }

}




export default ProjectStore;
