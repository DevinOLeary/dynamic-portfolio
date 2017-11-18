import React from 'react';


const HeadShot = (props) =>  {
  console.log(props.headshot);
  return (
    <div>
      <h2>Headshot</h2>
      <img src={props.headshot}
      alt="Devin O\'Leary"
      className="headshot" onLoad={props.loadPic.bind(this)}/>
    </div>
  );
}

export default (HeadShot);
