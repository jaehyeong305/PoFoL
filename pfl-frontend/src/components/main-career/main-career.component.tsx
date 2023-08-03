import React, {useState, useEffect} from "react";
import "./main-career.component.scss";

const MainCareerComponent: React.FC = () => {
    const [mainCareerVisible, setMainCareerVisible] = useState(false);
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);

    const dateList = ["2019.04", "2020.01", "2021.06", "2022.09"];

    useEffect(() => {
        const handleScrollReveal = () => {
            const mainCareer = document.querySelector(".main-career");
            if (!mainCareer) return;

            const mainCareerPosition = mainCareer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (mainCareerPosition < windowHeight * 0.8) {
                setMainCareerVisible(true);

                const dateItemHeight = 400;
                const scrolledDateIndex = Math.floor(
                    (windowHeight * 0.5 - mainCareerPosition) / dateItemHeight
                );

                if (scrolledDateIndex < dateList.length) {
                    setSelectedDateIndex(scrolledDateIndex);
                }
            } else {
                setMainCareerVisible(false);
            }
        };

        window.addEventListener("scroll", handleScrollReveal);

        return () => {
            window.removeEventListener("scroll", handleScrollReveal);
        };
    }, []);

    return (
        <div className="main-career">
            <span className={`main-title ${mainCareerVisible ? "show" : ""}`}>개발자 경력 총 4년 1개월</span>

            <div className="table-container">
                {/* NOTE(hajae): 경력 날짜 */}
                <div className="date-column">
                    {dateList.map((date, index) => (
                        <div key={index} className={`date ${index <= selectedDateIndex ? "current" : ""}`}>
                            {date}
                        </div>
                    ))}
                </div>

                {/* NOTE(hajae): 경력 라인(시간의 흐름 표시하기 위한 세로로 긴 줄) */}
                <div className={`line-column ${mainCareerVisible ? "show" : ""}`}></div>

                {/* NOTE(hajae): 경력 아이템 */}
                <div className="content-column">
                    {dateList.map((date, index) => (
                        <div
                            key={index}
                            className={`content ${index <= selectedDateIndex ? "current" : ""}`}
                        >
                            {index === 0 && (
                                <div>Content for 2019.04</div>
                            )}

                            {index === 1 && (
                                <div>Content for 2020.01</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainCareerComponent;
