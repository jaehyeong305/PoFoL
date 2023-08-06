import React, {useState, useEffect} from 'react';
import './main.component.scss';
import {useScrollContext} from 'context/scroll.context';
import MainCareerComponent from "components/main-career/main-career.component";
import MainChallengeComponent from "components/main-challenge/main-challenge.component";

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

    return (
        <div className="main-container">
            <div className="main">
                <img src="images/main-background.png" alt=""/>
                <img src="images/scroll.png" alt="" className={`plz-scroll ${showScrollIcon ? 'show' : 'hide'}`}/>
                <div className="discription">
                    <span className="discription1">환영합니다.</span>
                    <span className="discription2">소통하는 <span className="position">Front-End Developer</span></span>
                    <span className="discription3"><span className="name">하재형</span> 입니다.</span>
                </div>
            </div>
            <MainCareerComponent/>
            <MainChallengeComponent/>
        </div>
    );
};

export default MainComponent;
