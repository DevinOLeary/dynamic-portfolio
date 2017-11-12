import React from 'react';

export const LeftButton = (props) => {
  const {onClick} = props
  return <span onClick={onClick} className="left-button">&#8249;</span>
}

export const RightButton = (props) => {
  const {onClick} = props
  return <span onClick={onClick} className="right-button">&#8250;</span>
}

export default {LeftButton, RightButton};
