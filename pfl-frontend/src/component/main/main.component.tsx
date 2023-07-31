import React, { useState } from 'react';
import { HEADER_LOGO_ROOT, HEADER_TABS } from '../../constants';
import HeaderComponent from '../../ui-component/header/header.component';
import MainProfileComponent from './profile/main-profile.component';
import './main.component.scss';

const MainComponent: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);

  const handleScroll = ()=> {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 1) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`header ${showHeader ? 'show' : 'hide'}`}>
        <HeaderComponent rogoImageUrl={HEADER_LOGO_ROOT} headerTabs={HEADER_TABS} />
      </header>
      <MainProfileComponent />
    </div>
    );
};

export default MainComponent;
