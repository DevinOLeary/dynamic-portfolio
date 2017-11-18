import React from 'react';


const PicCategory = (props) => {
  const coloredUnderline = {
    backgroundColor: `#872341`,
    borderColor: `#872341`
  }
  return(
    <div className="hover-highlight">
      <hgroup className="flex-container column center">
        <h2>{props.title}</h2>
        <hr className="link-underline" style={coloredUnderline}/>
      </hgroup>
      <img className="img-categories" src={props.image} alt= {props.title} onLoad={props.loaded.bind(this)}/>
    </div>
  );
}

export default PicCategory;
