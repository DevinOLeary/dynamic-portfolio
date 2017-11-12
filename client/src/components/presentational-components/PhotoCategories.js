import React from 'react';
import {NavLink} from 'react-router-dom';
import {observer, inject} from 'mobx-react';

//components
import PicCategory from './PicCategory';
import LoadingPane from '../small-components/LoadingPane';
import animations from '../small-components/animations';

@inject('store')
@observer
class PhotoCategories extends React.Component {

  loaded(e){
    animations.fadeInDown(e.target);
  }

  render(props){
    const {picInfo, loading} = this.props.store.photographyStore;
    if(loading === true){ return <LoadingPane/>}else {
      const action = picInfo.find(pic => {
        return pic.acf.photo_category === 'action';
      });
      const travel = picInfo.find(pic => {
        return pic.acf.photo_category === 'travel';
      });

      // store specified category head image paths into variables
      const actionImage = action._embedded['wp:featuredmedia']["0"].source_url;
      const travelImage = travel._embedded['wp:featuredmedia']["0"].source_url;
      return (
        <section>
          <div className="triangle-left"></div>
          <div className="flex-container row even-spacing">
            <div className="text-center header-pic_category">
              <NavLink to="/photography/category_action">
                <PicCategory image={actionImage} title="Action" loaded={this.loaded}/>
              </NavLink>
            </div>
            <div className="text-center header-pic_category">
              <NavLink to="/photography/category_travel">
                <PicCategory image={travelImage} title="Travel" loaded={this.loaded}/>
              </NavLink>
            </div>
          </div>
        </section>
      );
    }
  }
}


export default PhotoCategories;
