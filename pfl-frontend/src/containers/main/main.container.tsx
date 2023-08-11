import React from "react";
import "./main.container.scss";
import { HEADER_LOGO_ROOT, HEADER_TABS } from "constants/AppConstants";
import HeaderComponent from "ui-component/header/header.component";
import MainComponent from "components/main/main.component";
import FooterComponent from "ui-component/footer/footer.component";

const MainContainer: React.FC = () => {
  return (
    <div>
      <HeaderComponent
        rogoImageUrl={HEADER_LOGO_ROOT}
        headerTabs={HEADER_TABS}
        hasScrollEvent={true}
      />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default MainContainer;
