import React, { useState, useEffect } from 'react';
import './main.component.scss';
import { useScrollContext } from 'context/scroll.context';

const MainComponent: React.FC = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const scrollContext = useScrollContext();

  useEffect(() => {
    const handleScrollIcon = () => {
      setShowScrollIcon(scrollContext <= 200);
    };

    window.addEventListener('scroll', handleScrollIcon);

    return () => {
      window.removeEventListener('scroll', handleScrollIcon);
    };
  }, [scrollContext]);

  const [mainCareerVisible, setMainCareerVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  const [dateVisible, setDateVisible] = useState(false);
  const dateList = ["2019.04", "2020.01", "2021.06", "2022.09"];

  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  useEffect(() => {
    const handleScrollReveal = () => {
      const mainCareer = document.querySelector(".main-career");
      if (!mainCareer) return;

      const mainCareerPosition = mainCareer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (mainCareerPosition < windowHeight * 0.8) {
        setMainCareerVisible(true);
        setLineVisible(true);
        setDateVisible(true);

        const dateItemHeight = 400;
        const scrolledDateIndex = Math.floor((windowHeight * 0.5 - mainCareerPosition) / dateItemHeight);

        if (scrolledDateIndex < dateList.length) {
          setSelectedDateIndex(scrolledDateIndex);
        }
      } else {
        setMainCareerVisible(false);
        setLineVisible(false);
        setDateVisible(false);
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
        <img src="images/main-background.png" alt="" />
        <img src="images/scroll.png" alt="" className={`plz-scroll ${showScrollIcon ? 'show' : 'hide'}`} />
        <div className="discription">
          <span className="discription1">환영합니다.</span>
          <span className="discription2">소통하는 <span className="position">Front-End Developer</span></span>
          <span className="discription3"><span className="name">하재형</span> 입니다.</span>
        </div>
        <div className={`main-career ${mainCareerVisible ? 'show' : ''}`}>
          <span className="main-title">개발자 경력 총 4년 1개월</span>

          {/* 추가: 선 표시 */}
          {lineVisible && <div className={`line ${mainCareerVisible ? 'show' : ''}`} />}

          {/* 추가: 날짜 표시 */}
          {dateVisible && (
            <div className="date-container">
              {dateList.map((date, index) => (
                <div
                  key={index}
                  className={`date ${index <= selectedDateIndex ? "current" : ""}`}
                >
                  {date}
                </div>
              ))}
            </div>
          )}

          {/*TODO(hajae): Component화*/}
          {/*<span className="main-section1">*/}
          {/*  <img src="/images/bizreach-img.png" alt=""></img>*/}
          {/*  <span>일본 전직(転職)사이트 1위 기업</span>*/}
          {/*</span>*/}
        </div>
      </div>
    </div>
    );
};

export default MainComponent;
