import {observable, action, computed} from 'mobx';

class PhotographyStore {

  @observable picInfo = []
  @observable loading = true

  @action loadImages(category){
    return fetch(`/api/photos/${category}`)
    .then(response => {
      return response.json();
    })
    .then(results => {
      this.picInfo = results.picArray;
    })
    .catch(error => console.log(error))
  }

  @computed get picSort(){
    const keyGetter = (pic) => (pic.location);
    const map = new Map();
    let imageArray = this.picInfo;
    imageArray.forEach((item) => {
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
