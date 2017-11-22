import React from 'react';
import {TimelineLite} from 'gsap';
import GSAP from 'react-gsap-enhancer';

function fadeInList(target){
  let list = target.querySelectorAll('.img-skill');
  let tl = new TimelineLite();
  return tl.staggerFromTo(list, 1.5,{opacity: 0, y: -20}, {opacity: 1, y: 0, delay: .8}, 0.2);
}

class SkillsSection extends React.Component {
  componentDidAppear(){
    fadeInList(this.skills);
  }
  componentDidEnter(){
    fadeInList(this.skills);
  }

  render(props){
    let list = this.props.skillsArray.map((skill) => {
      return <li key={skill.id}>
                <img src={skill.data} alt={skill.category} className="img-skill"/>
              </li>
    });
    return (
        <article className="flex-container center column full-width ">
          <div className="flex-container center">
            <p className="content-body_read">Technology is changing every day, and it really requires a passion that's borderline obsession to stay up to date on the most effective ways to build modern websites and applications. There's no telling what I'll be using next month, but here are a few of the tools I'm currently working with:</p>
          </div>
          <ul className="flex-container row center" ref={(ref) => {this.skills = ref}}>
            {list}
          </ul>
        </article>
    );
  }
}

export default GSAP()(SkillsSection);
