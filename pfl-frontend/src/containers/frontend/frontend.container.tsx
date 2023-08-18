import React from "react";
import HeaderComponent from "ui-component/header/header.component";
import "./frontend.container.scss";
import {HEADER_LOGO_ROOT, HEADER_TABS} from "constants/AppConstants";
import FrontendSummaryComponent from "components/project/frontend-summary/frontend-summary.component";
import FrontendInfoComponent from "components/project/frontend-info/frontend-info.component";

const FrontendContainer: React.FC = () => {
    return (
        <div className="frontend-container">
            <HeaderComponent rogoImageUrl={HEADER_LOGO_ROOT} headerTabs={HEADER_TABS} hasScrollEvent={true} hideScrollHeight={100}/>
            <FrontendSummaryComponent />
            <FrontendInfoComponent />
        </div>
    );
}

export default FrontendContainer;