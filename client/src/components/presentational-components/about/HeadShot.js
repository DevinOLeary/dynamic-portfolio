import React from 'react';


const HeadShot = (props) =>  {
  // const headshot = props.aboutInfo.find(info => (
  //   info.acf.category ===  'headshot'
  // ));
  return(
    <h2>Headshot</h2>
    // <img src={headshot._embedded['wp:featuredmedia']["0"].source_url}
    // alt={headshot.acf.category}
    // className="headshot" onLoad={props.loadPic.bind(this)}/>
  );
}

export default (HeadShot);
