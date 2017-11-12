import React from 'react';

const coloredUnderline = {
  backgroundColor: `#872341`,
  borderColor: `#872341`
}
const CategoryHeader = (props) => {
  return (
    <hgroup className="hover-highlight flex-container center column" onClick={props.onClick.bind(this, props.title)}>
      <h2 className={(props.title === props.activeCategory ? 'active' : '')}>{props.title}</h2>
      <hr className="link-underline" style={coloredUnderline}/>
    </hgroup>
  )
}

export default CategoryHeader;
