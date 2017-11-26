import React from 'react';


//components
import CategoryHeader from '../../small-components/CategoryHeader';
import ListItems from './ListItems';


const ProjectList = (props) => {
  return (
    <div className="flex-container center full-width">
    <div className="triangle-left"></div>
      <section className="flex-container center row open_content-container">
        <ul className="flex-container row center full-width">
          <li className="project_cat-header"><CategoryHeader title='development' {...props} onClick={props.updateCategoryList}/></li>
          <li className="project_cat-header"><CategoryHeader title='design' {...props} onClick={props.updateCategoryList}/></li>
          <li className="project_cat-header"><CategoryHeader title='all' {...props} onClick={props.updateCategoryList}/></li>
        </ul>
        <ul className='flex-container row center'>
          <ListItems {...props}/>
        </ul>
      </section>
    </div>
  );
}

export default ProjectList;
