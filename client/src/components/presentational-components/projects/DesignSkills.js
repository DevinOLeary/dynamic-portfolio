import React from 'react';

//components
import LoadingPane from '../../small-components/LoadingPane';


export const DesignSkills = (props) => {
  if(props.loading === true){return <LoadingPane/>} else {
    const filter = props.projectInfo.filter(cat => (
      cat.acf.category === 'skills'
    ));
    let skills = filter[0].acf;
    return (

        <article className="flex-container center column full-width ">
          <div className="flex-container center">
            <p className="content-body_read">{skills.description}</p>
          </div>
          <ul className="flex-container row center">
            <li>
              <img src={skills.image_one.url} className='img-skill' alt={skills.category}/>
            </li>
            <li>
              <img src={skills.image_two.url} className='img-skill' alt={skills.category}/>
            </li>
            <li>
              <img src={skills.image_three.url} className='img-skill' alt={skills.category}/>
            </li>
            <li>
              <img src={skills.image_four.url} className='img-skill' alt={skills.category}/>
            </li>
            <li>
              <img src={skills.image_five.url} className='img-skill' alt={skills.category}/>
            </li>
          </ul>
        </article>
    );
  }
}

export default DesignSkills;
