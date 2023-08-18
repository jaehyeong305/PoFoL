import React from "react";
import HeaderComponent from "ui-component/header/header.component";
import "./selection-flow.container.scss";
import {HEADER_LOGO_ROOT, HEADER_TABS} from "constants/AppConstants";
import SelectionFlowSummaryComponent from "components/project/selection-flow-summary/selection-flow-summary.component";
import SelectionFlowInfoComponent from "components/project/selection-flow-info/selection-flow-info.component";
import SelectionFlowAwardComponent from "components/project/selection-flow-award/selection-flow-award.component";
import FooterComponent from "ui-component/footer/footer.component";

const SelectionFlowContainer: React.FC = () => {
    return (
        <div className="selection-flow-container">
            <HeaderComponent rogoImageUrl={HEADER_LOGO_ROOT} headerTabs={HEADER_TABS} hasScrollEvent={true} hideScrollHeight={100}/>
            <SelectionFlowSummaryComponent />
            <SelectionFlowInfoComponent />
            <SelectionFlowAwardComponent />
            <FooterComponent />
        </div>
    );
}

export default SelectionFlowContainer;