import ProjectStore from './ProjectStore';
import PhotographyStore from './PhotographyStore';
import AboutMeStore from './AboutMeStore';



class RootStore {
  constructor(props){
    this.projectStore = new ProjectStore()
    this.photographyStore = new PhotographyStore()
    this.aboutMeStore = new AboutMeStore()
  }
}

export default RootStore;
