import { HEADER_LOGO_ROOT, HEADER_TABS } from "constants/AppConstants";
import React from "react";
import HeaderComponent from "ui-component/header/header.component";
import "./career.container.scss";

const CareerContainer: React.FC = () => {
    return (
        <div>
            <HeaderComponent
                rogoImageUrl={HEADER_LOGO_ROOT}
                headerTabs={HEADER_TABS}
            />
        </div>
    );
}

export default CareerContainer;