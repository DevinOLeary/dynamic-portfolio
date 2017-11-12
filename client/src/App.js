import React, { Component } from 'react';
import {Provider} from 'mobx-react';
import {BrowserRouter} from 'react-router-dom';


//components
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop';

//styles
import './stylesheets/App.scss';

//stores
import RootStore from './stores/RootStore';




class App extends Component {
  render() {
      const stores = new RootStore();
    return (
      <Provider store={stores}>
          <BrowserRouter>
            <ScrollToTop>
              <Main />
            </ScrollToTop>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
