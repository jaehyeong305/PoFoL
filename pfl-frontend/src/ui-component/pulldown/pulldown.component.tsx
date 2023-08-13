import React from 'react';
import './pulldown.component.scss';
import { useDispatch } from 'react-redux';
import { setHoveredTab } from 'store/pulldown.store';
import { HeaderTabChild } from 'ui-component/header/header.component';
import { Link } from "react-router-dom";

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

  // NOTE(hajae): 이력서 및 자기소개서 다운로드
  const downloadFile = (isDownload?: boolean, fileName?: string) => {
    if (!isDownload || !fileName) return;

    const link = document.createElement('a');
    link.href = "/download/" + fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pulldown" onMouseEnter={() => handleMouseEnter(props.tabName)} onMouseLeave={handleMouseLeave}>
      {props.headerTabChilds.map((child, index) => (
        <Link to={child.isDownload ? "" : child.headerTabChildRoot}>
          <span key={index} onClick={() => downloadFile(child.isDownload, child.fileName)}>{child.headerTabChildName}</span>
        </Link>
      ))}
    </div>
  );
};

export default PulldownComponent;
