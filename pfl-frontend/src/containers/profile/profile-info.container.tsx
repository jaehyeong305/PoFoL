import { HEADER_LOGO_ROOT, HEADER_TABS } from "constants/AppConstants";
import React from "react";
import "./profile-info.container.scss";
import HeaderComponent from "ui-component/header/header.component";
import ProfileComponent from "components/profile/profile.component";

const ProfileInfoContainer: React.FC = () => {
  return (
    <div>
      <HeaderComponent
        rogoImageUrl={HEADER_LOGO_ROOT}
        headerTabs={HEADER_TABS}
      />
      <ProfileComponent />
    </div>
  );
};

export default ProfileInfoContainer;
