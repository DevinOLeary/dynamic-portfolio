import {observable, action, computed} from 'mobx';

class PhotographyStore {

  @observable picInfo = []
  @observable loading = true

  @action loadImages(category){
    this.loading = true;
    console.log(category);
    return fetch(`/api/photos/${category}`)
    .then(response => {
      return response.json();
    })
    .then(results => {
      console.log(results.data)
      console.log(results.category)
      this.picInfo = {
        image: results.data,
        category: results.category,
        location: results.location,
        id: results.id
      };
      this.loading = false;
    })
    .catch(error => console.log(error))
  }

  @computed get picSort(){
    const keyGetter = (pic) => (pic.location);
    const map = new Map();
    let imageArray = this.picInfo;
    console.log('within picSort' + imageArray);
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
