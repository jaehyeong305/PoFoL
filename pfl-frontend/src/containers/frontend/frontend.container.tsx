import React from "react";
import HeaderComponent from "ui-component/header/header.component";
import "./frontend.container.scss";
import {HEADER_LOGO_ROOT, HEADER_TABS} from "constants/AppConstants";

const FrontendContainer: React.FC = () => {
    return (
        <div className="frontend-container">
            <HeaderComponent rogoImageUrl={HEADER_LOGO_ROOT} headerTabs={HEADER_TABS}/>
        </div>
    );
}

export default FrontendContainer;