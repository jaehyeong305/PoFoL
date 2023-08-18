import React from "react";
import "./selection-flow-summary.component.scss";

const SelectionFlowSummaryComponent: React.FC = () => {
    return (
        <section className="selection-flow-summary-wrapper">
            <h1>전형흐름 관리 프로젝트</h1>
            <div className="project-summary">
                <div className="project-summary-image">
                    <img src="/images/selection-flow-image.png"  alt="hrmos-main"/>
                </div>
                <div className="project-summary-description">
                    <span className="main">고정적인 전형 흐름</span>
                    <span className="sub">(서류 → 1차 → ... → 최종 → 내정)</span>
                    <span className="main">↓</span>
                    <span className="main">커스터마이징된 전형 흐름</span>
                    <span className="sub">(서류 → 코딩테스트 → 캐주얼 → ... → 내정)</span>
                </div>
            </div>
        </section>
    );
}

export default SelectionFlowSummaryComponent;