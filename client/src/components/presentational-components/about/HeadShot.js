import React from 'react';


const HeadShot = (props) =>  {
  // const headshot = props.aboutInfo.find(info => (
  //   info.acf.category ===  'headshot'
  // ));
  return(
    <img src=""
    alt="Headshot"
    className="headshot" onLoad={props.loadPic.bind(this)}/>
  );
}

export default (HeadShot);
