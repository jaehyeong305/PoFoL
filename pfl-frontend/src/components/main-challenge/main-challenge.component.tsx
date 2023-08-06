import {useScrollContext} from 'context/scroll.context';
import React, {useState, useEffect} from 'react';
import './main-challenge.component.scss';

const MainChallengeComponent: React.FC = () => {
    const scrollContext = useScrollContext();
    const [isImageFixed, setIsImageFixed] = useState(false);
    const [opacity, setOpacity] = useState(0.7);
    const [textOpacity, setTextOpacity] = useState(1);
    const [transformY, setTransformY] = useState(42);

    useEffect(() => {
        const handleScroll = () => {
            // NOTE(hajae): 해당 컴포넌트가 스크롤 되었을 때, 해당 이미지를 화면에 고정한다.
            if (scrollContext >= 3750 && scrollContext <= 5500) {
                setIsImageFixed(true);
                // NOTE(hajae): 또한, 해당 컴포넌트를 벗어날 때, 투명도를 높여 없어지는 듯이 표시한다.
                const opacity = 1 - (scrollContext - 5000) / 500;
                setOpacity(opacity);
            } else {
                setIsImageFixed(false);
            }

            // NOTE(hajae): 해당 컴포넌트를 스크롤 할 때, 텍스트가 아래에서 올라오는 듯이 표시한다.
            if (scrollContext >= 3750 && scrollContext <= 4900) {
                const y = 42 - ((scrollContext - 3750) / (4900 - 3750)) * (42 + 65);
                setTransformY(y);
            }

            // NOTE(hajae): 텍스트가 올라가며 없어질 때, 투명도를 높여 없어지는 듯이 표시한다.
            if (scrollContext >= 4300 && scrollContext <= 4700) {
                const textOpacity = 1 - (scrollContext - 4300) / (4700 - 4300);
                setTextOpacity(textOpacity);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollContext]);

    return (
        <div className="main-challenge">
            <img src="images/background.png" alt="" className={isImageFixed ? "fixed-image" : ""}
                 style={{opacity: `${opacity}`}}></img>
            <div className={`description ${isImageFixed ? "current" : ""}`}>
                <p className="text-box">
                    <span style={{transform: `translate3d(0px, ${transformY}px, 0px)`, opacity: `${textOpacity}`}}>일본에서 경험을 쌓고</span>
                    <span style={{transform: `translate3d(0px, ${transformY}px, 0px)`}}>다양한 경험으로 전문성을 발전시키고</span>
                </p>
                <p className="text-box">
                    <span style={{transform: `translate3d(0px, ${transformY}px, 0px)`, opacity: `${textOpacity}`}}>한국에서 새로운 도전을 위해 귀국했습니다.</span>
                    <span
                        style={{transform: `translate3d(0px, ${transformY}px, 0px)`}}>[TODO] 문구는 나중에 한번 생각해보도록 하자</span>
                </p>
            </div>
        </div>
    );
};

export default MainChallengeComponent;
