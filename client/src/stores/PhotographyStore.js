import {observable, action, computed} from 'mobx';
import axios from 'axios';

class PhotographyStore {

  @observable picInfo = []
  @observable page = ""
  @observable loading = true


  @action loadImages(){
    this.loading = true;
    let dataUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/photos?_embed';
    return axios.get(dataUrl)
    .then((res)=>
      {this.picInfo = res.data
        this.loading = false}
    )
    .catch(error => console.log(error))
    }
  @computed get picSort(){
    const page = this.page;
    const newPics = this.picInfo.filter((pic) => (pic.acf.photo_category.toLowerCase() === page))
    const keyGetter = (pic) => (pic.acf.photo_location);
    const map = new Map();
    newPics.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if(!collection){
        map.set(key, [item]);
      } else {
        collection.push(item)
      }
    });
    return this.locationMap = map;
  }



//end of store
}



export default PhotographyStore;
