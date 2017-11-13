import React from 'react';
import {observer, inject} from 'mobx-react';
import {Route, Switch} from 'react-router-dom';

//components
import PhotoCategories from './presentational-components/PhotoCategories';
import PhotoGallery from './PhotoGallery';



@inject('store')
@observer
class Photography extends React.Component{


  componentWillMount(){
    this.props.store.photographyStore.loadImages();
  }





  render(){
    return(
      <div className="body-container">
        <Switch>
          <Route path="/photography" exact render={props => <PhotoCategories/>} />
          <Route path="/photography/category_action" exact render={(props) => <PhotoGallery title="Action" />}/>
          <Route path="/photography/category_travel" exact render={(props) => <PhotoGallery title="Travel" />}/>
        </Switch>
      </div>
    );
  }
}

export default Photography;
