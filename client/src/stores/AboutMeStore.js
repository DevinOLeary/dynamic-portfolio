import {observable, action, computed} from 'mobx';
import axios from 'axios';

class AboutMeStore{
  @observable timePeriodId = '';
  @observable aboutInfo = [];
  @observable loading = true;

  @action loadAbout(){
    this.loading = true;
    let dataUrl = '/about';
    return axios.get(dataUrl)
    .then(res => {
      this.aboutInfo = res.data.info
      this.loading = false
    })
    .catch(error => console.log(error))
    }

    @action loadNewTimePeriod(id){
      this.timePeriodId = id.toString();
    }


    // @computed get activeTimePeriod(){
    //   return this.aboutInfo.filter((info) => (
    //     info._id === this.timePeriodId
    //   ));
    // }
}




export default AboutMeStore;
