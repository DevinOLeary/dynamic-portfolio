import React from 'react';


const HeadShot = (props) =>  {
  return (
    <div>
      <img src={props.headshot}
      alt="Devin O\'Leary"
      className="headshot" onLoad={props.loadPic.bind(this)}/>
    </div>
  );
}

export default (HeadShot);
