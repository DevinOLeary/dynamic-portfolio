import React, { Component } from 'react';
import {Provider} from 'mobx-react';
import {BrowserRouter} from 'react-router-dom';
import DocumentMeta from 'react-document-meta';


//components
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop';

//styles
import './stylesheets/App.scss';

//stores
import RootStore from './stores/RootStore';




class App extends Component {
  render() {
      const meta = {
        title: 'Devin O&#8217;Leary Web Development and Design',
        description: 'I&#8217;m Devin O&#8217;Leary, a Web Developer and Designer, Photographer, Cyclist, Surfer, Adventurer, and really just someone trying to live an authentic and impactful life. Send me a message so we can talk about creating something great!'
      };
      const stores = new RootStore();
    return (
      <Provider store={stores}>
          <DocumentMeta {...meta}/>
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
