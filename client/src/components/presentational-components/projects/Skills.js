import React from 'react';

const Skills = (props) => {
  const skillsArray = this.props.skillsArray.map((skill) => {
    return <li key={skill.id} className="skill-item">
              <img src={skill.data} alt={skill.category} className="img-skill"/>
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

export default Skills;
