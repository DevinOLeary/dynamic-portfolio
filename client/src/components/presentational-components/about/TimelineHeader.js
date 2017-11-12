import React from 'react';

const coloredUnderline = {
  backgroundColor: `#C8606F`,
  borderColor: `#C8606F`
}

const TimelineHeader = (props) => {
  if(props.aboutInfo.length === 0){return null}
  const timelineHeader = props.aboutInfo.map(head => (
    <li className="timeline-header hover-highlight" key={head._id} id={head._id}>
      <a onClick={props.loadTime.bind(this, head._id)}>
        <h4 className={props.timePeriodId === head._id ? 'active' : ''}>{head.header}</h4>
      </a>
      <hr className="link-underline" style={coloredUnderline}/>
    </li>
  ))
  return (
        <ul className="flex-container row center">
         {timelineHeader}
        </ul>
  );
}

export default TimelineHeader;
