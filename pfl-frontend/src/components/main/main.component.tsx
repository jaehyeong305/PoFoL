import React, {useState} from 'react';
import './main.component.scss';
import { HEADER_LOGO_ROOT, HEADER_TABS } from '../../constants';
import HeaderComponent from 'ui-component/header/header.component';
import MainProfileComponent from 'components/main/profile/main-profile.component';
import { useScrollContext } from "context/scroll.context";

const MainComponent: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const scrollContext = useScrollContext();

  React.useEffect(() => {
    const handleScroll = ()=> {
      if (scrollContext > 200) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContext]);

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
