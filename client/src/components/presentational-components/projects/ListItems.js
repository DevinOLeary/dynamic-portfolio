import React from 'react';
import {Link} from 'react-scroll';

import LoadingPane from '../../small-components/LoadingPane';


class ListItems extends React.Component {
  render(props){
    return(
      this.props.loading === true ? <LoadingPane/> :
      this.props.filteredProjects.map((work) => {
        return(
          <Link to="projectPane" smooth={true} key={work.id}>
            <li onClick={this.props.isOpen.bind(this, work.id)} className="project-list-items">
              <div className="project_list_img-container">
                <div className="project_list_img-overlay">
                  <h4 className="text-inverse">{work.title}</h4>
                </div>
                <img src={work.coverImage} alt={work.title}/>
              </div>
            </li>
          </Link>
        )
      })
    );
  }
}

export default ListItems;
