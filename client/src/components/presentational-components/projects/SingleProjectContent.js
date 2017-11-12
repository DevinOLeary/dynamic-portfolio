import React from 'react';

import animations from '../../small-components/animations';

class SingleProjectContent extends React.Component {

  componentDidMount(){
    let boxItem = document.getElementById('boxItem');
    animations.fadeInDown(boxItem);
  }

  render(){
    return (
      <div className="flex-container center column" id="boxItem">
        <section className="project-display-box flex-container center column">
          <button onClick={this.props.closeProject.bind(this)} className="button-action text-inverse button-long"><h4>close</h4></button>
          {this.props.children}
        </section>
      </div>
    )
  }
}

export default SingleProjectContent;
