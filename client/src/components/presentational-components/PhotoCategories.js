import React from 'react';
import {NavLink} from 'react-router-dom';
import {observer, inject} from 'mobx-react';

//components
import PhotoCategorySingle from './PhotoCategorySingle';
import animations from '../small-components/animations';
import actionImage from '../../images/huntington-surfer-2.jpg';
import travelImage from '../../images/iceland-road.jpg';

@inject('store')
@observer
class PhotoCategories extends React.Component {

  loaded(e){
    animations.fadeInDown(e.target);
  }

  render(){
    return (
      <section>
        <div className="triangle-left"></div>
        <div className="flex-container row even-spacing">
          <div className="text-center header-pic_category">
            <NavLink to="/photography/category_action">
              <PhotoCategorySingle image={actionImage} title="Action" loaded={this.loaded}/>
            </NavLink>
          </div>
          <div className="text-center header-pic_category">
            <NavLink to="/photography/category_travel">
              <PhotoCategorySingle image={travelImage} title="Travel" loaded={this.loaded}/>
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}


export default PhotoCategories;
