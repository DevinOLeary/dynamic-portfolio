import React from 'react';
import {NavLink} from 'react-router-dom';
import {observer,inject} from 'mobx-react';
import {Element} from 'react-scroll';

//components
import SideMenu from './small-components/SideMenu';
import animations from './small-components/animations';
import LoadingPane from './small-components/LoadingPane';


function imagesLoaded(parentNode) {
  const imgElements = parentNode.querySelectorAll('img');
  for (const img of imgElements) {
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

@inject('store')
@observer
class PhotoGallery extends React.Component {

  componentWillMount(){
    this.props.store.photographyStore.loadImages(this.props.title.toLowerCase());
  }



  handleImageLoad(e){
    const galleryElement = this.refs.gallery;
    this.props.store.photographyStore.loading = !imagesLoaded(galleryElement);
    animations.fadeInDown(e.target);
  }



  render(props){
      const {picSort, locationMap, loading} = this.props.store.photographyStore;


    if(locationMap.size === 0){
      return null;
    }
    const list = [];
    let locationHeader = null;
    locationMap.forEach(function(value, key){
      if(key !== locationHeader){
        list.push(<Element name={key} key={key}><h2>{key}</h2></Element>);
      }
      list.push(value.map(pic => (
        <li key={pic.id} >
          <img
          className="img-presented"
          src={pic.data}
          alt={pic.location}/>
        </li>
      )));
      locationHeader = key;
    });
    const menuMap = []
    locationMap.forEach(function(value, key){
      return menuMap.push(key);
    });
    return(
      <div>
        <main className="body-container">
          <hgroup className="flex-container center">
            <h1>{this.props.title}</h1>
          </hgroup>
          {loading ? <LoadingPane/> :
            <section className="flex-container center column">
              <ul ref="gallery" onLoad={this.handleImageLoad.bind(this)}>
                {list}
              </ul>
            </section>
          }
        </main>
        <div className="flex-container center mini-block">
          <NavLink to="/photography"><button className="button-secondary">Back To Categories</button></NavLink>
        </div>
        <section className="nav-side">
          <SideMenu menu={menuMap} allPics={picSort}/>
        </section>
      </div>
    );
  }
}


export default PhotoGallery;
