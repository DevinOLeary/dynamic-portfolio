import React from 'react';

//components
import LoadingPane from '../../small-components/LoadingPane';


export const DesignSkills = (props) => {
  if(props.loading === true){return <LoadingPane/>} else {
    const filter = props.projectInfo.filter(cat => (
      cat.category === 'skills'
    ));

    const skillsList = filter.imageArray.map((img) => {

    })
    return (

        <article className="flex-container center column full-width ">
          <div className="flex-container center">
            <p className="content-body_read">Technology is changing every day, and it really requires a passion that's borderline obsession to stay up to date on the most effective ways to build modern websites and applications. There's no telling what I'll be using next month, but here are a few of the tools I'm currently working with:</p>
          </div>
          <ul className="flex-container row center">

          </ul>
        </article>
    );
  }
}

export default DesignSkills;
