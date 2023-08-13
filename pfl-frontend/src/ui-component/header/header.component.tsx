import React, { useState } from "react";
import "./header.component.scss";
import { useSelector, useDispatch } from "react-redux";
import { FaExternalLinkSquareAlt } from "@react-icons/all-files/fa/FaExternalLinkSquareAlt";
import PulldownComponent from "ui-component/pulldown/pulldown.component";
import { setHoveredTab } from "store/pulldown.store";
import { useScrollContext } from "context/scroll.context";
import { Link } from "react-router-dom";

type HeaderComponentProps = {
  rogoImageUrl: string;
  headerTabs: HeaderTab[];
  hasScrollEvent?: boolean;
  hideScrollHeight?: number;
};

export type HeaderTab = {
  headerTabName: string;
  headerTabChilds: HeaderTabChild[];
  linkUrl?: string;
  isNewWindow?: boolean;
};

export type HeaderTabChild = {
  headerTabChildName: string;
  headerTabChildRoot: string;
  fileName?: string;
  isDownload?: boolean;
};

const HeaderComponent: React.FC<HeaderComponentProps> = (
  props: HeaderComponentProps,
) => {
  const [showHeader, setShowHeader] = useState(true);
  const scrollContext = useScrollContext();

  // NOTE(hajae): scroll 높이에 따른 Header 표시/숨김
  React.useEffect(() => {
    const handleScroll = () => {
      if (!props.hasScrollEvent) {
        setShowHeader(true);
        return;
      }

      if (scrollContext > (!!props.hideScrollHeight ? props.hideScrollHeight : 200)) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContext, props.hasScrollEvent]);

  const hoveredTab = useSelector((state: any) => state.hoveredTab);
  const dispatch = useDispatch();

  // NOTE(hajae): hover한 tab 이름을 관리
  const handleMouseEnter = (tabName: string) => {
    dispatch(setHoveredTab(tabName));
  };

  const handleMouseLeave = () => {
    dispatch(setHoveredTab(""));
  };

  return (
    <div className="header-container">
      <header className={`header ${showHeader ? "show" : "hide"}`}>
        <Link to="/">
          <img src={props.rogoImageUrl} className="logo" alt="logo" />
        </Link>
        {props.headerTabs.map((tab, index) => (
          <div className="tab-wrapper" key={index}>
            <div
              className="tab"
              onMouseEnter={() => handleMouseEnter(tab.headerTabName)}
              onMouseLeave={handleMouseLeave}
            >
              {!tab.isNewWindow && (tab.headerTabName)}
              {tab.isNewWindow && (
                  <a href={tab.linkUrl} target="_blank" rel="noreferrer">
                    {tab.headerTabName}
                    <FaExternalLinkSquareAlt className="icon external-link" />
                  </a>
              )}
            </div>
            {/* NOTE(hajae): hover 여부에 따라 pulldown 표시*/}
            {hoveredTab === tab.headerTabName &&
              tab.headerTabChilds.length > 0 && (
                <PulldownComponent
                  tabName={tab.headerTabName}
                  headerTabChilds={tab.headerTabChilds}
                ></PulldownComponent>
              )}
          </div>
        ))}
      </header>
      {!props.hasScrollEvent && <div className="empty-box"></div>}
    </div>
  );
};

export default HeaderComponent;
