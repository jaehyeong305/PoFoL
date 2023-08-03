import React, {useState} from 'react';
import './main.container.scss';
import { HEADER_LOGO_ROOT, HEADER_TABS } from '../../constants';
import HeaderComponent from 'ui-component/header/header.component';
import MainComponent from 'components/main/main.component';
import { useScrollContext } from "context/scroll.context";

const MainContainer: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const scrollContext = useScrollContext();

  // NOTE(hajae): scroll 높이에 따른 Header 표시/숨김
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
      <MainComponent />
    </div>
    );
};

export default MainContainer;
