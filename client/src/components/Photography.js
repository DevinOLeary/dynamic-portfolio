import React from 'react';
import {Route, Switch} from 'react-router-dom';

//components
import PhotoCategories from './presentational-components/PhotoCategories';
import PhotoGallery from './PhotoGallery';

class Photography extends React.Component{

  render(){
    return(
      <div className="body-container">
        <Switch>
          <Route path="/photography" exact component={PhotoCategories}/>
          <Route path="/photography/category_action" exact render={(props) => <PhotoGallery title="Action" />}/>
          <Route path="/photography/category_travel" exact render={(props) => <PhotoGallery title="Travel" />}/>
        </Switch>
      </div>
    );
  }
}

export default Photography;
