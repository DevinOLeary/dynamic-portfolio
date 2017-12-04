import React from 'react';
import treeIcon from '../../images/tree_icon.png';

const LoadingPane = (props) => (
    <div className="body-container flex-container center">
      <img src={treeIcon} alt="one sec..." className="loading-icon"/>
    </div>
)

export default LoadingPane;
