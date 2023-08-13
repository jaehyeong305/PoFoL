import { HEADER_LOGO_ROOT, HEADER_TABS } from "constants/AppConstants";
import React from "react";
import HeaderComponent from "ui-component/header/header.component";
import "./career.container.scss";
import CareerComponent from "components/career/career.component";

const CareerContainer: React.FC = () => {
    return (
        <div>
            <HeaderComponent
                rogoImageUrl={HEADER_LOGO_ROOT}
                headerTabs={HEADER_TABS}
                hasScrollEvent={true}
                hideScrollHeight={100}
            />
            <CareerComponent />
        </div>
    );
}

export default CareerContainer;