import { HEADER_LOGO_ROOT, HEADER_TABS } from "constants/AppConstants";
import React from "react";
import "./profile-info.container.scss";
import HajaeTable from "ui-component/hajae-table/hajae-table.component";
import HeaderComponent from "ui-component/header/header.component";

const ProfileInfoContainer: React.FC = () => {
  return (
    <div className="profile-info-container">
      <HeaderComponent
        rogoImageUrl={HEADER_LOGO_ROOT}
        headerTabs={HEADER_TABS}
      />
      <HajaeTable>
        <tbody>
          <tr>
            <th>hello</th>
            <td>world</td>
          </tr>
        </tbody>
      </HajaeTable>
    </div>
  );
};

export default ProfileInfoContainer;
