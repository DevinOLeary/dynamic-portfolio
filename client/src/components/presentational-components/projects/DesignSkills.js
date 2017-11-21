import React from 'react';
import {TimelineLite} from 'gsap';
import GSAP from 'react-gsap-enhancer';

//components
import LoadingPane from '../../small-components/LoadingPane';

function fadeInList(){
  let list = ".img-skill";
  let tl = new TimelineLite();
  return tl.staggerTo(list, 1.5,{opacity: 1, y: 20, delay: .5}, 0.2);
}

class DesignSkills extends React.Component {

  loaded(){
    return this.addAnimation(fadeInList);
  }

  render(props){
    const skillsArray = this.props.skillsArray.map((skill) => {
      return <li key={skill.id}>
                <img src={skill.data} alt={skill.category} onLoad={this.loaded.bind(this)} className="img-skill"/>
              </li>
    });
    return (

        <article className="flex-container center column full-width ">
          <div className="flex-container center">
            <p className="content-body_read">Technology is changing every day, and it really requires a passion that's borderline obsession to stay up to date on the most effective ways to build modern websites and applications. There's no telling what I'll be using next month, but here are a few of the tools I'm currently working with:</p>
          </div>
          <ul className="flex-container row center">
            {skillsArray}
          </ul>
        </article>
    );
  }
}

export default GSAP()(DesignSkills);
