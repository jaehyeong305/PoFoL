import React from 'react';
import './pulldown.component.scss';
import { useDispatch } from 'react-redux';
import { setHoveredTab } from 'store/store';
import { HeaderTabChild } from 'ui-component/header/header.component';

type PulldownProps = {
  tabName: string;
  headerTabChilds: HeaderTabChild[];
}

const PulldownComponent: React.FC<PulldownProps> = (props: PulldownProps) => {
  const dispatch = useDispatch();

  const handleMouseEnter = (tabName: string) => {
    dispatch(setHoveredTab(tabName));
  };

  const handleMouseLeave = () => {
    dispatch(setHoveredTab(''));
  };

  return (
    <div className="pulldown" onMouseEnter={() => handleMouseEnter(props.tabName)} onMouseLeave={handleMouseLeave}>
      {props.headerTabChilds.map((child, index) => (
        <span key={index}>{child.headerTabChildName}</span>
      ))}
    </div>
  );
};

export default PulldownComponent;
