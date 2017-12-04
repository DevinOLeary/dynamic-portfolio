import React from 'react';

const coloredUnderline = {
  backgroundColor: `#872341`,
  borderColor: `#872341`
}

const TimelineHeader = (props) => {
  if(props.aboutInfo.length === 0){return null}
  const timelineHeader = props.aboutInfo.map(head => (
    <li className={"timeline-header hover-highlight" + head._id === props.timePeriodId ? 'active' : 'default'} key={head._id} id={head._id} onClick={props.loadTime.bind(this, head._id)}>
      <h4>{head.header}</h4>
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
