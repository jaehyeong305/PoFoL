import React from "react";
import HeaderComponent from "ui-component/header/header.component";
import "./frontend.container.scss";
import {HEADER_LOGO_ROOT, HEADER_TABS} from "constants/AppConstants";
import FrontendSummaryComponent from "components/project/frontend-summary/frontend-summary.component";

const FrontendContainer: React.FC = () => {
    return (
        <div className="frontend-container">
            <HeaderComponent rogoImageUrl={HEADER_LOGO_ROOT} headerTabs={HEADER_TABS}/>
            <FrontendSummaryComponent></FrontendSummaryComponent>
        </div>
    );
}

export default FrontendContainer;