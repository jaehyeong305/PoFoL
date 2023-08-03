import React, { useState } from 'react';
import './main-profile.component.scss';
import {useScrollContext} from "context/scroll.context";

const MainProfileComponent: React.FC = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const scrollContext = useScrollContext();

  // NOTE(hajae): scroll 높이에 따른 Scroll Icon 표시/숨김
  React.useEffect(() => {
    const handleScrollIcon = ()=> {
      if (scrollContext > 200) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    };

    window.addEventListener('scroll', handleScrollIcon);

    return () => {
      window.removeEventListener('scroll', handleScrollIcon);
    };
  }, [scrollContext]);
  
  const [revealTextVisible, setRevealTextVisible] = useState(false);

  React.useEffect(() => {
    const revealText = document.querySelector(".main-career");

    const handleScrollReveal = () => {
      if (revealText) {
        const revealTextPosition = revealText.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (revealTextPosition < windowHeight * 0.8) {
          setRevealTextVisible(true);
        } else {
          setRevealTextVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScrollReveal);

    return () => {
      window.removeEventListener("scroll", handleScrollReveal);
    };
    }, []);

  return (
    <div className="main-container">
      <div className="main">
        <img src="images/main-background.png" alt=""></img>
        <img src="images/scroll.png" alt="" className={`plz-scroll ${showScrollIcon ? 'show' : 'hide'}`}></img>
        <div>
          <span className="discription1">환영합니다.</span>
            <span className="discription2">소통하는 <span className="position">Front-End Developer</span></span>
          <span className="discription3"><span className="name">하재형</span> 입니다.</span>
        </div>
        <div className={`main-career ${revealTextVisible ? 'show' : ''}`}>
          <span className="main-title">개발자 경력 총 4년 1개월</span>
          <span className="main-section1">
            <img src="/images/bizreach-img.png" alt=""></img>
            <span>일본 전직(転職)사이트 1위 기업</span>
          </span>
        </div>
      </div>
    </div>
    );
};

export default MainProfileComponent;
