import {observable, action, computed} from 'mobx';

class PhotographyStore {

  @observable picInfo = []
  @observable loading = true

  @action loadImages(category){
    this.loading = true;
    return fetch(`/api/photos/${category}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(results => {
      console.log(results.picArray)
      this.picInfo = results.picArray;
      this.loading = false;
    })
    .catch(error => console.log(error))
  }

  @computed get picSort(){
    const keyGetter = (pic) => (pic.location);
    const map = new Map();
    let imageArray = this.picInfo;
    console.log(imageArray);
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
