import React from "react";
import "./frontend-summary.component.scss";

const FrontendSummaryComponent: React.FC = () => {
    return (
        <section className="frontend-summary-wrapper">
            <h1>차세대 프론트엔드 프로젝트</h1>
            <div className="project-summary">
                <div className="project-summary-image-1">
                    <img src="/images/hrmos_main.png"  alt="hrmos-main"/>
                </div>
                <div className="project-summary-image-2">
                    <img src="/images/skill-icons/angular-js.svg" alt="angular-js-logo" />
                    <span>↓</span>
                    <img src="/images/skill-icons/angular-ar21.svg" alt="angular-logo" />
                </div>
            </div>
        </section>
    );
}

export default FrontendSummaryComponent;