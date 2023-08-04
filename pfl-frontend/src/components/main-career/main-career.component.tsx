import React, {useState, useEffect} from "react";
import "./main-career.component.scss";
import MainCareerItemComponent from "components/main-career-item/main-career-item.component";

const MainCareerComponent: React.FC = () => {
    const [mainCareerVisible, setMainCareerVisible] = useState(false);
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);

    const dateList = ["2019.04", "2019.08", "2021.06", "2022.09"];

    useEffect(() => {
        const handleScrollReveal = () => {
            const mainCareer = document.querySelector(".main-career");
            if (!mainCareer) return;

            const mainCareerPosition = mainCareer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (mainCareerPosition < windowHeight * 0.8) {
                setMainCareerVisible(true);

                const dateItemHeight = 300;
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
                <div className="line-column">
                    <div className={`line ${mainCareerVisible ? "show" : ""}`}></div>
                    <div className="circle-container">
                        {dateList.map((date, index) => (
                            <div key={index} className={`small-circle ${index <= selectedDateIndex ? "current" : ""}`}></div>
                         ))}
                    </div>
                </div>

                {/* NOTE(hajae): 경력 아이템 */}
                <div className="content-column">
                    {dateList.map((date, index) => (
                        <div
                            key={index}
                            className={`content ${index <= selectedDateIndex ? "current" : ""}`}
                        >
                            {index === 0 && (
                                <MainCareerItemComponent
                                    imgUrl={"/images/bizreach-img.png"}
                                    imgDiscription={"일본 전직(転職)사이트 1위 기업"}
                                    title={"일본기업 Bizreach(ビズリーチ) 입사"}
                                    description={"일본 전직(転職) 업계 1위 기업. 신졸(新卒) 엔지니어로 취업성공하여 일본생활을 시작한 시기. \n 입사 후, 5개월동안 신입 연수(비즈니스 매너, 개발 연수 등)를 수료. \n \n 회사명 : 株式会社 ビズリーチ \n 사원수 : 2,000명↑, 매출액 : 4,395억 \n 회사소개 : 전직(転職), 헤드헌터 및 하이 클래스 채용"}
                                    linkTitle={"기업정보확인"}
                                    linkUrl={"https://www.bizreach.co.jp/corporate_info/profile/"}
                                    linkIsNewWindow={false}
                                />
                            )}

                            {index === 1 && (
                                <MainCareerItemComponent
                                    imgUrl={"/images/hrmos-img.png"}
                                    imgDiscription={"Hrmos 채용"}
                                    title={"Hrmos채용 부서에 배속"}
                                    description={"'Hrmos채용 Product본부 개발2팀'에 배속받아 개발 업무를 시작.\n\n부서소개 : 채용 관리 시스템. 기업의 인사, 채용을 지원 (B2B, SaaS)\n 소속팀 : DeepDive (리더 1, 팀원 5, QA 1)\n 주요업무 : 웹페이지 유지보수(풀스택 개발자)\n 기술스택 : Scala(Play), AngularJS(TypeScript)"}
                                    linkTitle={"Hrmos 확인"}
                                    linkUrl={"https://hrmos.co/?utm_source=bizreach.co.jp&utm_medium=referral&trcd=biz_corp&_ga=2.124455242.1341871500.1691029247-2048989049.1684221352"}
                                    linkIsNewWindow={false}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainCareerComponent;
