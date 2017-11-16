import React from 'react';


const HeadShot = (props) =>  {
  return (
    <div>
      <h2>Headshot</h2>
      <img src={"data:" + props.headshot.contentType + ";base64," + props.headshot.image.data}
      alt={props.headshot.category}
      className="headshot" onLoad={props.loadPic.bind(this)}/>
    </div>
  );
}

export default (HeadShot);
