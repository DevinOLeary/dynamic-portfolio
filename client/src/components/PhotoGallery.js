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
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }
  componentWillMount(){
    this.props.store.photographyStore.loadImages(this.props.title.toLowerCase());
  }

  handleImageLoad(e){
    const galleryElement = this.gallery;
    let loadingStatus = !imagesLoaded(galleryElement);
    this.setState({loading: loadingStatus});
    animations.fadeInDown(e.target);
  }




  render(props){
    const {picSort, locationMap} = this.props.store.photographyStore;
    const imageStyle = {opacity: this.state.loading ? 0 : 1};

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
          alt={pic.location}
          style={imageStyle}
          />
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
        <main>
          <hgroup className="flex-container center">
            <h1>{this.props.title}</h1>
          </hgroup>
          <section className="flex-container center column">
            <ul ref={ref => this.gallery = ref} onLoad={this.handleImageLoad.bind(this)}>
              {list}
            </ul>
          </section>
        </main>
        <div className="flex-container center mini-block">
          <NavLink to="/photography"><button className="button-primary">Back To Categories</button></NavLink>
        </div>
        <section className="nav-side">
          <SideMenu menu={menuMap} allPics={picSort}/>
        </section>
      </div>
    );
  }
}


export default PhotoGallery;
