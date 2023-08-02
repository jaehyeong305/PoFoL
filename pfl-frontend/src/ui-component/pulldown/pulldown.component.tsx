import React from 'react';
import './pulldown.component.scss';
import { useDispatch } from 'react-redux';
import { setHoveredTab } from 'store/pulldown.store';
import { HeaderTabChild } from 'ui-component/header/header.component';

type PulldownProps = {
  tabName: string;
  headerTabChilds: HeaderTabChild[];
}

const PulldownComponent: React.FC<PulldownProps> = (props: PulldownProps) => {
  const dispatch = useDispatch();

  // NOTE(hajae): Header뿐만 아니라 pulldown component 내부에 마우스 커서가 존재할 경우 hover 상태 유지
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
