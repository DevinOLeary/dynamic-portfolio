import React from 'react';
import {TimelineLite} from 'gsap';
import GSAP from 'react-gsap-enhancer';
import {Link} from 'react-scroll';

import LoadingPane from '../../small-components/LoadingPane';


function fadeInList(){
  let list = ".project-list-items";
  let tl = new TimelineLite();
  return tl.staggerTo(list, 1.5,{opacity: 1, y: 20, delay: .5}, 0.2);
}

class ListItems extends React.Component {

  loaded(){
    this.addAnimation(fadeInList);
  }
  render(props){
    return(
      //is page loaded?
      this.props.loading === true ? <LoadingPane/> :
        // mapping of projects
        this.props.filteredProjects.map((work) => {
          return(
            <Link to="projectPane" smooth={true} key={work.id}>
              <li onClick={this.props.isOpen.bind(this, work.id)} className="project-list-items">
                <div className="project_list_img-container">
                  <div className="project_list_img-overlay">
                    <h4 className="text-inverse">{work.acf.title}</h4>
                  </div>
                  <img src={work._embedded['wp:featuredmedia']["0"].source_url} alt={work.acf.title} onLoad={this.loaded.bind(this)}/>
                </div>
              </li>
            </Link>
          )

        })

    )
  }
}

export default GSAP()(ListItems);
