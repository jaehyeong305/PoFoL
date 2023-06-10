import React from 'react';
import { HEADER_LOGO_ROOT, HEADER_TABS } from '../../constants';
import HeaderComponent from '../../ui-component/header/header.component';

const MainComponent: React.FC = () => {
    return (
        <HeaderComponent rogoImageUrl={HEADER_LOGO_ROOT} headerTabs={HEADER_TABS}></HeaderComponent>
    );
};

export default MainComponent;