import React from 'react';
import { HeaderTabChild } from '../header/header.component';
import './pulldown.component.scss';

type PulldownProps = {
  headerTabChilds: HeaderTabChild[];
}

const PulldownComponent: React.FC<PulldownProps> = (props: PulldownProps) => {
  return (
    <div className="pulldown">
      {props.headerTabChilds.map((child, index) => (
        <span>{child.headerTabChildName}</span>
      ))}
    </div>
  );
};

export default PulldownComponent;
