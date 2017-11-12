import React from 'react';
import {inject, observer} from 'mobx-react';

//components
import AboutContent from './presentational-components/about/AboutContent';
import animations from './small-components/animations';
import LoadingPane from './small-components/LoadingPane';




@inject('store')
@observer
class AboutMe extends React.Component {


  componentWillMount(){
    this.props.store.aboutMeStore.loadAbout();
  }


  //set timePeriodId to the clicked id
  loadTime = (id) => {
    this.props.store.aboutMeStore.loadNewTimePeriod(id);
  }
  loadPic = (e) => {
    animations.fadeInDown(e.target);
  }

  render() {
    const {aboutInfo, activeTimePeriod, loading, timePeriodId} = this.props.store.aboutMeStore;
    const active = activeTimePeriod;
    const props = {aboutInfo, active, loading, timePeriodId};
    console.log(aboutInfo)
    return(
      <div>
        <hgroup className="flex-container center column">
          <h2>a little about myself</h2>
        </hgroup>
        <br/>
      {aboutInfo.length < 1 ? <LoadingPane/> :
        <AboutContent {...props} loadTime={this.loadTime} loadPic={this.loadPic}/>
      }
      </div>
    );
  }

}

export default AboutMe;
